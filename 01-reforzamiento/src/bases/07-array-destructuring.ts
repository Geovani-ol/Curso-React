const caracterNames = ["Goku", "Vegeta", "Trunks"];

const [p1, p2, p3] = caracterNames;

console.log({ p1, p2, p3 });

const [, , trunks] = caracterNames;

console.log({ trunks });

const returnsArrayFn = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);

// Tarea: Implementar useState

const useState = (value: string) => {
  return [value, (newValue: string) => console.log(newValue)] as const;
};

const [name, setName] = useState("Goku");
console.log(name);
setName("Vegeta");
