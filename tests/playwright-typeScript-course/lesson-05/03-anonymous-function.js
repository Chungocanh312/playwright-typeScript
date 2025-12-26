// Name function (có tên):
function nameFunction(){
    console.log(`I have a name!`);
}

// Anonymous function (không tên):
// function() {
//     console.log(`I'm anonymous!`);
// } 
// => Tuy nhiên sẽ báo lỗi: Syntax Error! Do hàm anonymous Không thể đứng một mình

// Anonymous function phải được sử dụng ngay. Như sau:
// 1. Gán cho biến
const anonymousFunc = function(){
    console.log(`I'm anonymous but stored in a variable`);
}

// 2. Dùng làm hàm callback:
setTimeout(function() {
    console.log(`Anonymous callback!`);
}, 1000); 