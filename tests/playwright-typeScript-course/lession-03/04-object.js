// Task 1:
const car = {
  make: `Toyota`,
  model: `Corolla`,
  year: `2021`
};
console.log(car.year);

// Task 2:
const person = {
  name: `Anthony McClaren`,
  address: {
    street: `Baker`,
    city: `London`,
    country: `England`
  }
};  
console.log(person.address.street);

// Task 3:
const student = {
    name: `Anthony McClaren`,
    grades: {
        math:`9`,
        english:`8`
    }
};
console.log(student[`grades`][`math`]);

// Task 4:
const setting = {
    volume: `87`,
    brightness: `90`
};
setting.volume = 50;
console.log(setting);

// Task 5:
const bike = {
};
bike.color = `blue`;
console.log(bike);

// Task 6:
const employee = {
    name: `Chris`,
    age: `30`
}
delete employee.age;
console.log(employee);

// Task 7:
const school = {
    classA: [`An`,`Bình`,"Châu"],
    classB: [`Đào`,`Hương`,`Giang`]
};
console.log(school);


