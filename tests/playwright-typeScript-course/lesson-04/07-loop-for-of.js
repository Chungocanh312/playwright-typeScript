const arr = [0, -100, 100, 500, 780, 900];
for (let item of arr) {
    console.log(item)
}

for (let item of arr) {
    if (item > 0) {
        console.log(item);
    }
}

for (let i = 0; i <= arr.length; i++){
    if (arr[i] > 0) {
        console.log(arr[i]);
    }
}