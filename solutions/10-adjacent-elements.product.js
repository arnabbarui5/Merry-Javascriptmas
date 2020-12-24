function adjacentElementsProduct(nums) {
  if (nums.length < 2) return nums[0];
  let product = nums[0] * nums[1];
  const lastIndex = nums.length - 1;

  for (let i = 1; i < lastIndex; i += 1) {
    if (nums[i] * nums[i + 1] > product) {
      product = nums[i] * nums[i + 1];
    }
  }
  return product;
}

module.exports = { adjacentElementsProduct };
