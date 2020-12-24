function arrayPreviousLess(nums) {
  if (!Array.isArray(nums)) {
    throw new Error('Invalid input');
  }
  const arrayClone = [...nums];
  nums.forEach((element, index) => {
    if (typeof element !== 'number') {
      throw new Error('Invalid input');
    }
    for (let i = index - 1; i >= 0; i -= 1) {
      if (element > nums[i]) {
        arrayClone[index] = nums[i];
        return;
      }
    }
    arrayClone[index] = -1;
  });
  return arrayClone;
}

module.exports = { arrayPreviousLess };
