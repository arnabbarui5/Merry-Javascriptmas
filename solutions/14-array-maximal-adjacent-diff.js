function arrayMaximalAdjacentDifference(nums) {
  if (!Array.isArray(nums) || !nums.length) {
    throw new Error('Invalid argument');
  }

  if (nums.length < 2) return nums[0];

  let maxAbsoluteDiff = Math.abs(nums[0] - nums[1]);
  const lastIndex = nums.length - 1;

  for (let i = 1; i < lastIndex; i += 1) {
    const diff = Math.abs(nums[i] - nums[i + 1]);
    if (maxAbsoluteDiff < diff) {
      maxAbsoluteDiff = diff;
    }
  }

  return maxAbsoluteDiff;
}

module.exports = { arrayMaximalAdjacentDifference };
