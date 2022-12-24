export const saddlePoints = (matrix) => {
  let rowsPoints = generateRowsPoints(matrix);
  let columnsPoints = generateColumnsPoints(matrix);  
  let saddlePoints = generateSaddlePoints(rowsPoints, columnsPoints);
  return generateResultObj(saddlePoints);
};

const generateRowsPoints = (matrix) => {
  let rowsPoints = [];
  
  matrix.forEach((row, rIndex) => {
    let maxRowValue = Math.max(...row);    
    let maxRowValueIndexes = [];
    
    row.forEach((value, cIndex) => {
      if (value === maxRowValue) {
        rowsPoints.push([rIndex, cIndex]);
      }
    });
  });

  return rowsPoints;
}

const generateColumnsPoints = (matrix) => {
  let columnsPoints = [];
  let nColumns = matrix[0].length;
  let nRows = matrix.length;

  for (let cIndex = 0; cIndex < nColumns; cIndex++) {
    let columnValues = [];

    for (let rIndex = 0; rIndex < nRows; rIndex++) {
      columnValues.push(matrix[rIndex][cIndex]);
    }
    
    let minColumnValue = Math.min(...columnValues);

    let minColumnValueIndexes = [];
    
    columnValues.forEach((value, rIndex) => {
      if (value === minColumnValue) {
        columnsPoints.push([rIndex, cIndex]);
      }
    });
  }

  return columnsPoints;
}

const generateSaddlePoints = (rowsPoints, columnsPoints) => {
  let saddlePoints = [];
  
  rowsPoints.forEach(row => {    
    columnsPoints.forEach(column => {
      let isSaddlePoint = false;
      
      isSaddlePoint = row.every((rowValue, rowValueIndex) => 
        row[rowValueIndex] === column[rowValueIndex]
      );
      
      if(isSaddlePoint) {
        saddlePoints.push(row);
      }
    })
  });

  return saddlePoints;
}

const generateResultObj = (saddlePoints) => {
  let result = [];

  saddlePoints.forEach(point => {
    result.push({
      "row": point[0] + 1,
      "column": point[1] + 1
    })
  });

  return result;
}