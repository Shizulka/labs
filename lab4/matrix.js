
function random (row = 5 , col = 5,min =-1000 , max = 1000) {
    const matrix = [];
    for (let i = 0; i < row; i++) {
        const row=[];
        for (let j = 0; j < col; j++) {
            row.push(Math.floor(Math.random() * (max - min)) + min);
        }
        matrix.push(row);
    }
    return matrix;
}

const max = (array) => {
    let max = array[0][0];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > max) {
                max =array[i][j] ;
            }
            }
        }
    return max;
    }


const matrix = random();
console.log(matrix);
console.log(max(matrix))
