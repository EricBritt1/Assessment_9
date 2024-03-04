// I didn't read until later that I was supposed to traverse the square in a spiral. I've never seen this before so here is my version without traversing.

function unroll(squareArray) {
    if (!Array.isArray(squareArray) || squareArray.length === 0 || !Array.isArray(squareArray[0])) {
        throw new Error('Input is not a valid 2D array.');
    }

    const LENGTH_OF_ARRAY = squareArray.length;
    let resultArray = [];

    for(let i = 0; i < LENGTH_OF_ARRAY; i++) {
        for(let j = 0; j < squareArray[i].length; j++) {
            RESULT_ARRAY.push(squareArray[i][j])
        }
    }

    return resultArray
};


//THIS IS CREDIT TO CHATGPT I DID NOT DO THIS. I ONLY DID "UNROLL". I have this here to see how to implement spiralTraversal. This hasn't been gone over in the course. I will have to neetCode! 

function spiralTraversal(squareArray) {
    if (!Array.isArray(squareArray) || squareArray.length === 0 || !Array.isArray(squareArray[0])) {
        throw new Error('Input is not a valid 2D array.');
    }

    let resultArray = [];
    let top = 0;
    let bottom = squareArray.length - 1;
    let left = 0;
    let right = squareArray[0].length - 1;
    let direction = 0;

    while (top <= bottom && left <= right) {
        if (direction === 0) {
            // Traverse top row
            for (let i = left; i <= right; i++) {
                resultArray.push(squareArray[top][i]);
            }
            top++;
        } else if (direction === 1) {
            // Traverse rightmost column
            for (let i = top; i <= bottom; i++) {
                resultArray.push(squareArray[i][right]);
            }
            right--;
        } else if (direction === 2) {
            // Traverse bottom row
            for (let i = right; i >= left; i--) {
                resultArray.push(squareArray[bottom][i]);
            }
            bottom--;
        } else if (direction === 3) {
            // Traverse leftmost column
            for (let i = bottom; i >= top; i--) {
                resultArray.push(squareArray[i][left]);
            }
            left++;
        }
        // Update direction
        direction = (direction + 1) % 4;
    }

    return resultArray;
}

module.exports = unroll;
