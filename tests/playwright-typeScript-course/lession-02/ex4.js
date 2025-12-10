let chieuCao = 210;
let soLeChieuCao;

if (chieuCao < 200) {
  soLeChieuCao = chieuCao % 100;
} else if ((chieuCao => 200)) {
  soLeChieuCao = (chieuCao % 100) + 100;
}
console.log(soLeChieuCao);

let canNangLyTuong = (soLeChieuCao * 9) / 10;
let mucCanToiDa = soLeChieuCao;
let mucCanToiThieu = (soLeChieuCao * 8) / 10;

console.log(`Cân năng lý tưởng bằng ${canNangLyTuong}`);
console.log(`Mức cân tối đa bằng ${mucCanToiDa}`);
console.log(`Mức cân tối thiểu bằng ${mucCanToiThieu}`);
