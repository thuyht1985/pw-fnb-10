const chieuCao = 164; // khai báo biến chieuCao
const soLeChieuCao = chieuCao % 100; // chia chieuCao cho 100 và lấy số dư

const canNangLyTuong = soLeChieuCao * 9 / 10; // Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
const canNangToiDa = soLeChieuCao; // Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
const canNangToiThieu = soLeChieuCao * 8 / 10; // Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10

console.log("Can nang ly tuong: " + canNangLyTuong + ", can nang toi da: " + canNangToiDa + ", can nang toi thieu: ", canNangToiThieu) // In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng 1 dòng