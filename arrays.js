// class DynamicArray {
//   length;
//   data;

//   constructor(...values) {
//     this.length = 0;
//     this.data = {}; //{key is index: value}
//     console.log("Values", values);
//     for (let value of values) {
//       this.data[this.length] = value;
//       this.length++;
//     }
//   }

//   get(index) {
//     return this.data[index];
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//   }
//   pop() {
//     if (this.length < 0) return undefined;
//     let lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   insert(index, item) {
//     if (index > this.length - 1 || index < 0) {
//       return undefined;
//     }
//     this.length++;
//     console.log("I Init", this.length - 1);
//     for (let i = this.length - 1; i > index; i--) {
//       console.log("i" + i + "-->" + index);
//       this.data[i] = this.data[i - 1];
//     }
//     this.data[index] = item;
//     return this.data;
//   }
//   remove(index) {
//     if (this.length === 0) {
//       return undefined;
//     }

//     // Ensure we're removing an item inside the array
//     if (index > this.length - 1 || index < 0) {
//       return undefined;
//     }

//     const itemToBeRemoved = this.data[index];

//     // Shift items inward one index towards the one we remove
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }

//     // The item we want to delete is just overwritten to the value of the index that comes after it.

//     // Since all items were shifted inward one spot, we need to remove the last index/item since our array size shrinks by 1
//     delete this.data[this.length - 1];
//     this.length--;

//     return itemToBeRemoved;
//   }
// }

// let array = new DynamicArray(3, 4, 5);
// array.push(2);
// console.log("ARRAY", array.data);
// // console.log("pop", array.pop());
// console.log("ARRAY", array.data);
// console.log("INSERT", array.insert(2, 9));

// const walkMatrix = (matrix: number[][]): number[] => {
//   // Your solution here //WRONG THIS ONE
//   //   return matrix.flat().sort((a, b) => a - b);
//   const arrLength = matrix.length;
//   const arr: number[] = [];
//   for (let i = 0; i < arrLength; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       console.log("first", i, j);
//       arr.push(matrix[i][j]);

//     }
//   }
//   return arr;
// };

// const matrix = [
//   [0, 1, 2, 3],
//   [11, 12, 13, 4],
//   [10, 15, 14, 5],
//   [9, 8, 7, 6],
// ];
// console.log("MATRIXd", matrix[0][3]);
// console.log("MARIX", walkMatrix(matrix));

// const buildProductArray = (input) => {
//   const results = new Array(input.length).fill(1);
//   let leftRunningProduct = 1;

//   // First use our results array as the running right product array.
//   // We fill from the right side.

//   for (let i = 1; i < input.length; i++) {
//     const endIdx = input.length - 1 - i;
//     console.log("enDindex", endIdx);
//     console.log("ResultIn", results[endIdx + 1] * input[endIdx + 1]);
//     results[endIdx] = results[endIdx + 1] * input[endIdx + 1];
//   }
//   console.log("Result", results);
//   // Refill the results with the product at each point
//   for (let i = 0; i < input.length; i++) {
//     const productExceptSelf = leftRunningProduct * results[i];

//     // We use results[i] above so now it can be replaced
//     results[i] = productExceptSelf;

//     // Now that we have used our left product,
//     // we update it to include the current element.
//     leftRunningProduct = leftRunningProduct * input[i];
//   }

//   return results;
// };
const buildProductArray = (input) => {
  const left = new Array(input.length).fill(1);
  const right = new Array(input.length).fill(1);
  const result = [];
  for (let i = 1; i < input.length; i++) {
    left[i] = left[i - 1] * input[i - 1];
  }
  for (let i = input.length - 1; i >= 1; i--) {
    right[i - 1] = right[i] * input[i];
  }
  for (let i = 0; i < input.length; i++) {
    result.push(left[i] * right[i]);
  }
  return result;
};
const input = [1, 2, 3, 4, 5];
console.log("ARRYA RESULT", buildProductArray(input));
