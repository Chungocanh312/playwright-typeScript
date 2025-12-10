// Khai báo:
let mentor = {
  name: `Anthony`,
  role: `mentor`,
  age: 18,
  student: false,
  class: {
    name: `K20`,
    subject: `Fullstach automation`,
  },
};

console.log(mentor.name);
console.log(mentor.class.name);
console.log(mentor["name"]);
console.log(mentor["class"]["name"]);
console.log(mentor[`class`][`name`]);
console.log(mentor["class"]["name"]);
console.log(mentor["class"]);

mentor.name = "Anthony Chu";
console.log(mentor);
