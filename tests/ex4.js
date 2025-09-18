const chieuCao = 164;
const soLeChieuCao = chieuCao % 100;

const canNangLyTuong = soLeChieuCao * 9 / 10;
const canNangToiDa = soLeChieuCao;
const canNangToiThieu = soLeChieuCao * 8 / 10;

console.log("Can nang ly tuong: " + canNangLyTuong + ", can nang toi da: " + canNangToiDa + ", can nang toi thieu: ", canNangToiThieu)