const person = {
  name: `John`,
  age: 30,
  city: `New York`,
};

for (let property in person) {
  console.log(`${property} : ${person[property]}`);
  console.log(property + `:` + person[property]);
}

const arr2 = [`Phong`, `Ngan`, `Uyen`];
for (let i in arr2) {
  console.log(i);
}

const colors = [`red`, `green`, 1, `blue`];
colors.customProperty = `rainbow`;

for (let index in colors) {
  console.log(index + ":" + colors[index]);
}
