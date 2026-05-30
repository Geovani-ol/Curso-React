interface Person {
  firstName: string;
  lastName: string;
  age: number;

  address: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const ironman: Person = {
  firstName: "Tony",
  lastName: "Stack",
  age: 45,
  address: {
    postalCode: "ABC-123",
    city: "New York",
  },
};

console.log(ironman);

// const spiderman = { ...ironman }; // CLona solo las propiedades hasta cierto punto antes de address
// const spiderman = structuredClone(ironman); // Para clonar por completo el objeto

// spiderman.firstName = "Peter";
// spiderman.lastName = "Parker";
// spiderman.age = 22;
// spiderman.address.city = "San José";

// console.log(ironman, spiderman);
