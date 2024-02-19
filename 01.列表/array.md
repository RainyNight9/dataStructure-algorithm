# 数组相关算法

## 1. 两数之和

https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked

```ts
function twoSum(nums: number[], target: number): number[] {
    const map = new Map()
    for(let i=0;i<nums.length;i++){
        let item = nums[i]
        if(map.has(target-item)) {
            return [map.get(target-item), i]
        }else{
            map.set(item, i)
        }
    }
};
```

