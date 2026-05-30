function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => {
  return `Hola ${name}`;
};

// Simplificado
// const greet2 = (name: string): string => `Hola ${name}`;

const mesaage = greet("Goku");
const mesaage2 = greet2("Vegeta");

console.log(mesaage, mesaage2);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: "ABC-123",
    username: "user123",
  };
}

const getUser2 = () => {
  return {
    uid: "ABC-321",
    username: "user321",
  };
};

// Simplificado
// const getUser2 = () => ({
//   uid: "ABC-321",
//   username: "user321",
// });

const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

// Útilizar mejor function de flecha
// myNumbers.forEach(function (value) {
//   console.log({ value });
// });

myNumbers.forEach((value) => {
  console.log({ value });
});

myNumbers.forEach(console.log);
