// Khai báo function
function sayHelloWorld() {
  console.log("Hello world!");
}

// Gọi hàm để sử dụng:
sayHelloWorld();

function countBeforeHelloWold (n) {
    let i;
    for (i = 0; i < n; i++ ){
        console.log(i);
    };
    sayHelloWorld();
}

countBeforeHelloWold(10);

function sum(a,b) {
    const sum = a + b;
    return sum;
}

const total = sum(5,6);
console.log(total);

function getMax(c,d) {
    if(c > d) {
        console.log(`số lớn nhất là ${c}`)
    } else if (c < d) {
        console.log(`số lớn nhất là ${d}`)
    } else if (c===d) {
        console.log(`Không có số lớn nhất`)
    }
};

getMax(20,10);

// Cách 2:
function getMax2(e,f) {
    if (e > f) return console.log(`số lớn nhất là ${e}`)
        return console.log(`số lớn nhất là ${f}`)
}

getMax2(10,10);