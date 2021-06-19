
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].


let nums = [2,7,11,15];
let target = 9;

const theSum = (nums, target) => {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        
        if(diff in obj)
            return [obj[diff], i];
        
            obj[nums[i]] = i;
    }
    
    return null;
};

console.log(theSum(nums,target));



var twoSum = function(nums, target) {
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]== target)
                return [i,j]; else return null;
        }
    }
};

console.log(twoSum(nums,target));
