function avoidObstacles(nums) {
  if (!Array.isArray(nums) || !nums.length) {
    throw new Error('Requires integer array');
  }

  const largestObstacle = Math.max(...nums);

  /*

  OR:
  const largestObstacle = nums.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
  });

  */

  for (let jump = 2; jump <= largestObstacle; jump += 1) {
    if (nums.every((obstacle) => obstacle % jump !== 0)) {
      return jump;
    }
  }
  return largestObstacle + 1;
}

module.exports = { avoidObstacles };
