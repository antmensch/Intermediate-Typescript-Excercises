export class Matrix {

  matrix: string;
  
  constructor(matrix: string) {
    this.matrix = matrix;
  }

  get rows(): number[][] {
    const result: number[][] = [];
    this.matrix
    .split('\n').
    forEach(elem => result.push(elem.split(' ').map(elem => Number(elem))));
    return result;
  }

  get columns(): number[][] {
    const result: number[][] = this.rows[0].map(el => []);
    this.rows.forEach(row => {
      for(let i = 0; i < row.length; i++) {
        result[i].push(row[i]);
    }
  }
  );
    return result;
  }
}
