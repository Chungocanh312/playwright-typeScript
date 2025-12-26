// trim():
let className = `    K18 Playwright    `;
console.log(className.trim());
console.log(className);

// toUpperCase() và toLowerCase();
let className1 = `K18 Playwright`; // Ở đây ta có cả in hoa và in thường trong chuỗi
console.log(className1.toUpperCase()); // viết tất cả thành in hoa
console.log(className1.toLowerCase()); // viết tất cả thành in thường

// includes():
let className2 = `Cộng hòa xã hội chủ nghĩa Việt Nam`;
console.log(className2.includes(`Cộng`));
console.log(className2.includes(`Mỹ`));

// replace():
let frameWork = `Playwright Javascript`;
console.log(frameWork.replace(`Ngoc Anh`, `Typescript`));

// split():
let emails = `ngocanh@gmail.com, hoang@gmail.com, lien@gmail.com`;
const arrEmail = emails.split(`@`);
console.log(arrEmail);

// substring():
let className3 = "K18 Playwright";
console.log(className3.substring(0, 3));
console.log(className3.substring(5));

// indexOf():
let className4 = `K18 Playwright Typescript`;
console.log(className4.indexOf("Play"));
console.log(className4.indexOf("Sele"));
