function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let leftNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let RightNum = nums[j];
      if (leftNum + RightNum === target) {
        return [i, j];
      }
    }
  }
}
module.exports = twoSum;
