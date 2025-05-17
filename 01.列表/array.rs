// 在 Rust 中, 数组的类型是 [T; N], 其中 T 是数组中存放的元素的数据类型, 而 N 表示数组的元素个数. 它们一旦被确定后就不能再更改. 
// 另外, 在栈上存储的数组, 其占用的内存大小是在编译期间确定了的, 对栈上数组中的元素的访问效率极高.

// 1. 访问数组
fn main() {
  let numbers: [i32; 6] = [1, 1, 2, 3, 5, 8];
  assert_eq!(numbers[0], 1);
  assert_eq!(numbers[3], 3);
  assert_eq!(numbers[5], 8);
}

// 2. 交换数组中的两个元素
// 在进行数组排序时, 经常需要交换其中的元素, 其时间复杂度是 O(1)
fn main() {
  let mut numbers: [i32; 6] = [1, 1, 2, 3, 5, 8];
  assert_eq!(numbers[0], 1);
  numbers.swap(0, 5);
  assert_eq!(numbers[5], 1);
}

// 3. 批量填充新的值
use std::sync::atomic::{AtomicI32, Ordering};

fn get_next_id() -> i32 {
    static NEXT_ID: AtomicI32 = AtomicI32::new(1);
    NEXT_ID.fetch_add(1, Ordering::Relaxed)
}

fn main() {
    let mut numbers = [1, 1, 2, 3, 5];
    numbers.fill(0);
    assert_eq!(numbers, [0, 0, 0, 0, 0]);
    numbers.fill_with(|| get_next_id().pow(2));
    assert_eq!(numbers, [1, 4, 9, 16, 25]);
}

// 4. 反转数组 Reverse
pub fn reverse_array(arr: &mut [i32]) {
  if arr.len() < 2 {
      return;
  }

  let mut start = 0;
  let mut end = arr.len() - 1;
  while start < end {
      let tmp = arr[end];
      arr[end] = arr[start];
      arr[start] = tmp;
      start += 1;
      end -= 1;
  }
}

#[cfg(test)]
mod tests {
  use super::reverse_array;

  #[test]
  fn test_reverse_array() {
      let mut arr = [1, 2, 3, 4, 5];
      reverse_array(&mut arr);
      assert_eq!(arr, [5, 4, 3, 2, 1]);
  }
}

// 5. 旋转数组 Rotate
// 给定一个数组, 包含 n 个元素, 要求将数组中的元素都依次向左移动 k 个位置. 如果 k 小于0, 就向右移动. 比如:

// 输入: arr = [1, 2, 3, 4]; k = -2, 输出: arr = [3, 4, 1, 2]
// 输入: arr = [1, 2, 3, 4]; k = 1, 输出: arr = [2, 3, 4, 1]

// 首先先将问题简化:

// 如果向右移动 k 个位置, 其实就相当于向左移动了 n-k 个位置; 所以我们刚开始只需要考虑左移的问题
// 如果向左移动了 c * n + k 个位置, 就相当于向左移动了 k 个位置, 因为经过 c * n 轮移动后, 元素位置并没有变化

// 方法1: 使用临时数组, 拷贝一份
// 操作过程如下:

// 将 arr[k..n] 存储到临时数组
// 将 arr[0..k] 存储到临时数组
// 将临时数组中的元素拷贝回原数组

// 这个方法的时间复杂度是 O(n), 空间复杂度是 O(n).
/// 使用临时数组
pub fn rotate_left_1(slice: &mut [i32], k: usize) {
  if slice.is_empty() {
      return;
  }

  let len = slice.len();
  let k = k % len;
  if k == 0 {
      return;
  }
  debug_assert!(k > 0 && k < len);

  let mut tmp: Vec<i32> = Vec::with_capacity(len);
  // 复制第一部分
  for &num in &slice[k..] {
      tmp.push(num);
  }

  // 复制第二部分
  for &num in &slice[..k] {
      tmp.push(num);
  }

  // 写回到原数组
  for (i, &num) in tmp.iter().enumerate() {
      slice[i] = num;
  }
}

/// 支持向右旋转
#[allow(clippy::cast_possible_wrap)]
#[allow(clippy::cast_sign_loss)]
pub fn rotate_array_1(slice: &mut [i32], k: isize) {
  let len = slice.len() as isize;
  if len == 0 {
      return;
  }
  let quot: isize = k / len;
  let k = if k < 0 { (1 - quot) * len + k } else { k };

  let k = k as usize;
  rotate_left_1(slice, k);
}

// 方法2: 三次反转法
// 操作过程如下:

// 将 arr[k..n] 进行反转
// 将 arr[0..k] 进行反转
// 将 arr[..] 进行反转

// 这个方法是在原地操作的, 其时间复杂度是 O(n), 空间复杂度是 O(1).
/// 原地反转数组
pub fn rotate_left_2(slice: &mut [i32], k: usize) {
  if slice.is_empty() {
      return;
  }

  let len = slice.len();
  let k = k % len;
  if k == 0 {
      return;
  }
  debug_assert!(k > 0 && k < len);

  slice[k..len].reverse();
  slice[..k].reverse();
  slice.reverse();
}

/// 支持向右旋转
#[allow(clippy::cast_possible_wrap)]
#[allow(clippy::cast_sign_loss)]
pub fn rotate_array_2(slice: &mut [i32], k: isize) {
  let len = slice.len() as isize;
  if len == 0 {
      return;
  }
  let quot: isize = k / len;
  let k = if k < 0 { (1 - quot) * len + k } else { k };

  let k = k as usize;
  rotate_left_2(slice, k);
}

// 方法3: 一步到位
// 所谓的一步到位法, 就是先计算好每个元素在旋转后的新位置, 然后依次转移每一个元素, 一步到位; 每个元素只移动一次.

// 操作过程如下:

// 计算数组中元素个数 n 与偏移量 k 的最大公约数 divisor
// 然后从 0 循环到 divisor, 把数组中的元素分成以 k 为步长, 组成的集合; 如果索引值超过了数组长度, 就取余
// 在循环体内部, 将集合中的第一个元素存到临时变量
// 依次将集合中的后一元素移动前一个元素
// 将临时变量存储到集合中的最后一个元素
// 最终将该集合中所有元素依次移位

// 这个方法是在原地操作的, 其时间复杂度是 O(n), 空间复杂度是 O(1).
#[must_use]
pub fn gcd(mut a: usize, mut b: usize) -> usize {
    debug_assert!(a > 0 && b > 0);
    while a != b {
        (a, b) = if a > b { (a - b, b) } else { (b - a, a) }
    }
    a
}

/// 一步到位
pub fn rotate_left_3(slice: &mut [i32], k: usize) {
    if slice.is_empty() {
        return;
    }

    let len = slice.len();
    let k = k % len;
    if k == 0 {
        return;
    }
    debug_assert!(k > 0 && k < len);

    // 第一步: 计算最大公约数
    let divisor = gcd(k, len);

    // 第二步: 从0遍历到最大公约数, 分隔成多个子集
    for i in 0..divisor {
        // 遍历每个子集中的元素, 依次移位
        // 先将集合中的第一个元素存到临时变量
        let tmp = slice[i];
        let mut head = i;
        loop {
            let next = (head + k) % len;
            if next == i {
                break;
            }
            // 依次将集合中的后一个元素移到前一个元素所有位置
            slice[head] = slice[next];
            head = next;
        }
        // 最后临时变量的值存到集合中最后一个元素
        slice[head] = tmp;
    }
}

/// 支持向右旋转
#[allow(clippy::cast_possible_wrap)]
#[allow(clippy::cast_sign_loss)]
pub fn rotate_array_3(slice: &mut [i32], k: isize) {
    let len = slice.len() as isize;
    if len == 0 {
        return;
    }
    let quot: isize = k / len;
    let k = if k < 0 { (1 - quot) * len + k } else { k };

    let k = k as usize;
    rotate_left_3(slice, k);
}
