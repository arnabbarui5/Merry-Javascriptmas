function extractMatrixColumn(matrix, column) {
  return matrix.map((row) => row[column]);
}

module.exports = { extractMatrixColumn };
