const myArray: number[] = [1, 2, 3, 4, 5, 6];
// const myArray: (number | string)[] = [1, 2, 3, 4, 5, 6]; // Por si queremos mas tipos de datos

const myArray2 = [...myArray]; // Limitado
// const myArray2 = structuredClone(myArray); // Recomendado

myArray2.push(7);

// myArray.push(10);
// myArray.push(11);

console.log(myArray, myArray2);

// for (const myNumber of myArray) {
//   console.log(myNumber + 10);
// }
