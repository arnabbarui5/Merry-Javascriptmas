function extractEachKth(nums, index) {
  return nums.filter((__, i) => (i + 1) % index !== 0);
}

module.exports = { extractEachKth };
