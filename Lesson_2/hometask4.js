function fillMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i += 1) {
      matrix[i] = [];
      for (let j = 0; j < n; j += 1) {
        matrix[i][j] = 0;
      }
    }
    return matrix;
  }
  function oddMagicSquare(n) {
    const matrix = fillMatrix(n);
    let lastLineIndex = n - 1;
    let middleColumnIndex = Math.floor(n / 2);
  
    for (let i = 1; i <= n * n; i += 1) {
      matrix[lastLineIndex][middleColumnIndex] = i;
      lastLineIndex += 1;
      middleColumnIndex += 1;
      if (i % n === 0) {
        lastLineIndex -= 2;
        middleColumnIndex -= 1;
      } else {
        lastLineIndex = Math.floor(lastLineIndex % n);
        middleColumnIndex = Math.floor(middleColumnIndex % n);
      }
    }
    return matrix;
  }
  function evenOddMagicSquare(n) {
    const half = n / 2;
    const matrix = fillMatrix(n);
    const tempMatrix = oddMagicSquare(half);
  
    // 1/4 matrix
    for (let i = 0; i < half; i += 1) {
      for (let j = 0; j < half; j += 1) {
        matrix[i][j] = tempMatrix[i][j];
      }
    }
    // 2/4 matrix
    for (let i = 0; i < half; i += 1) {
      for (let j = half; j < n; j += 1) {
        const x = j - half;
        matrix[i][j] = tempMatrix[i][x] + 2 * half * half;
      }
    }
    // 3/4 matrix
    for (let i = half; i < n; i += 1) {
      for (let j = 0; j < half; j += 1) {
        const x = i - half;
        matrix[i][j] = tempMatrix[x][j] + 3 * half * half;
      }
    }
    // 4/4 matrix
    for (let i = half; i < n; i += 1) {
      for (let j = half; j < n; j += 1) {
        const x = i - half;
        const y = j - half;
        matrix[i][j] = tempMatrix[x][y] + half * half;
      }
    }
    let move = 0;
    const a = 0;
    const b = 1;
    for (let i = 6; i < n; i += 1) {
      if (i % 4 !== 0 && i % 2 === 0) move += 1;
    }
    for (
      let j = matrix.length / 2 - move;
      j <= matrix.length / 2 + move - 1;
      j += 1
    ) {
      for (let i = 0; i < tempMatrix.length; i += 1) {
        const key = matrix[i][j];
        matrix[i][j] = matrix[half + i][j];
        matrix[half + i][j] = key;
      }
    }
    for (let j = 0; j <= 1; j += 1) {
      if (j === 0) {
        const key = matrix[a][a];
        matrix[a][a] = matrix[half][a];
        matrix[half][a] = key;
      }
      if (j === 1) {
        const key = matrix[half - b][a];
        matrix[half - b][a] = matrix[n - b][a];
        matrix[n - b][a] = key;
      }
    }
    for (let j = half + 1; j < n - 1; j += 1) {
      for (let i = 1; i < half - 1; i += 1) {
        const key = matrix[i][b];
        matrix[i][b] = matrix[half + i][b];
        matrix[half + i][b] = key;
      }
    }
    return matrix;
  }
  function evenMagicSquare(n) {
    const matrix = fillMatrix(n);
    let a = 1;
    let b = n * n;
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (i % 4 === j % 4 || (i + j) % 4 === 3) {
          matrix[i][j] = b;
        } else {
          matrix[i][j] = a;
        }
        b -= 1;
        a += 1;
      }
    }
    return matrix;
  }
  
  function genMagicSquare(n) {
    if (!n || n < 0 || n === 2) {
      throw new Error(`Impossible value: ${n}. Enter correct number`);
    }
    if (n % 2 !== 0) return oddMagicSquare(n);
    if (n % 4 !== 0) return evenOddMagicSquare(n);
    return evenMagicSquare(n);
  }
  function init(n) {
    try {
      console.table(genMagicSquare(n));
    } catch (e) {
      console.log(e);
    }
  }
  
  init(6);