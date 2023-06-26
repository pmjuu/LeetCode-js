/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hashmap = {};
    
    for (let i = 0; i < nums.length; i += 1) {
       hashmap[nums[i]] = i;
    }
    
    for (let i = 0; i < nums.length; i += 1) {
        const rest = target - nums[i];
        const hashmapKeys = Object.keys(hashmap).map(key => Number(key))
        
        if (hashmapKeys.includes(rest) && i !== hashmap[rest]) {
            return [i, hashmap[rest]];
        }
    }
};