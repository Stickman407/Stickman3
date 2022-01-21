const catData: (number | string)[] = [
  "Jeffery",
  3,
  "Mittens",
  4,
  "Scooter",
  2,
  "Wilson",
  1,
  "Jeremy",
  11,
  "Alphonse",
  0,
];

const cats: {
  name: string;
  age: number;
}[] = catData
  .filter((data) => typeof data === "string")
  .map((data, i) => {
    return {
      name: data as string,
      age: catData[i + 1] as number,
    };
  });

document.body.innerHTML = `
  <ul>
    ${cats.map((cat) => `<li>${cat.name} - ${cat.age}</li>`).join("")}
  </ul>
`;
