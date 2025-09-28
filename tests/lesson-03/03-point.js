// Tạo các hàm utility để xử lý mảng điểm số của học sinh
// 01. Tính điểm trung bình

function calculateAverage(scores) {
    // Kiểm tra nếu mảng scores rỗng
    if (scores.length === 0) {
        return 0; // Trả về 0 nếu không có điểm nào
    }

    // Bước 1: Tính tổng điểm
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i]; // Cộng dồn điểm vào biến total
    }

    // Bước 2: Tính điểm trung bình
    const average = total / scores.length; // Chia tổng điểm cho số lượng điểm

    return average; // Trả về điểm trung bình
}

// Kiểm tra hàm
const scores = [8, 7, 9, 6, 10];
console.log(calculateAverage(scores)); // Output: 8


// 02. Tìm điểm cao nhất

function findHighestScore(scores) {
    // Kiểm tra nếu mảng scores rỗng
    if (scores.length === 0) {
        return null; // Trả về null nếu không có điểm nào
    }

    // Bước 1: Khởi tạo biến highest để lưu điểm cao nhất
    let highest = scores[0]; // Giả định điểm cao nhất là điểm đầu tiên

    // Bước 2: Duyệt qua từng điểm trong mảng
    for (let i = 1; i < scores.length; i++) {
        // Nếu điểm hiện tại lớn hơn điểm cao nhất, cập nhật điểm cao nhất
        if (scores[i] > highest) {
            highest = scores[i];
        }
    }

    return highest; // Trả về điểm cao nhất
}

// Kiểm tra hàm
const scores = [8, 7, 9, 6, 10];
console.log(findHighestScore(scores)); // Output: 10



// 03. Đếm số điểm >= điểm đậu

function countPassingGrades(scores, passingScore = 5) {
    // Bước 1: Khởi tạo biến đếm
    let count = 0;

    // Bước 2: Duyệt qua từng điểm trong mảng
    for (let i = 0; i < scores.length; i++) {
        // Nếu điểm hiện tại lớn hơn hoặc bằng điểm đậu, tăng biến đếm
        if (scores[i] >= passingScore) {
            count++;
        }
    }

    return count; // Trả về số điểm đạt yêu cầu
}

// Kiểm tra hàm
const scores = [8, 4, 9, 3, 10];
console.log(countPassingGrades(scores, 5)); // Output: 3



// 04. Lọc ra học sinh có điểm < 5

function filterFailingStudents(students, scores) {
    // Kiểm tra xem hai mảng có cùng độ dài hay không
    if (students.length !== scores.length) {
        throw new Error("Mảng tên học sinh và mảng điểm số phải có cùng độ dài.");
    }

    // Bước 1: Tạo mảng chứa học sinh điểm thấp
    const failingStudents = [];

    // Bước 2: Lặp qua từng học sinh và điểm số
    for (let i = 0; i < students.length; i++) {
        // Kiểm tra nếu điểm số nhỏ hơn 5
        if (scores[i] < 5) {
            // Thêm tên học sinh vào mảng failingStudents
            failingStudents.push(students[i]);
        }
    }

    // Bước 3: Trả về mảng học sinh điểm thấp
    return failingStudents;
}

// Kiểm tra hàm
const students = ["An", "Bình", "Chi"];
const scores = [8, 4, 6];
console.log(filterFailingStudents(students, scores)); // ["Bình"]

// 05. Lọc ra học sinh có điểm < 5

function filterFailingStudents(students, scores) {
    // Bước 1: Khởi tạo mảng để lưu tên học sinh điểm thấp
    const failingStudents = [];

    // Bước 2: Duyệt qua từng học sinh và điểm tương ứng
    for (let i = 0; i < students.length; i++) {
        // Nếu điểm hiện tại nhỏ hơn 5, thêm tên học sinh vào mảng failingStudents
        if (scores[i] < 5) {
            failingStudents.push(students[i]);
        }
    }

    return failingStudents; // Trả về mảng chứa tên học sinh điểm thấp
}

// Kiểm tra hàm
const students = ["An", "Bình", "Chi"];
const scores = [8, 4, 6];
console.log(filterFailingStudents(students, scores)); // Output: ["Bình"]


// 06. Sắp xếp học sinh theo điểm giảm dần

function sortStudentsByScore(students, scores) {
    // Bước 1: Tạo mảng kết hợp tên học sinh và điểm số
    const combined = [];

    // Bước 2: Kết hợp tên học sinh với điểm số
    for (let i = 0; i < students.length; i++) {
        combined.push([students[i], scores[i]]);
    }

    // Bước 3: Sắp xếp mảng theo điểm số giảm dần
    combined.sort((a, b) => b[1] - a[1]);

    return combined; // Trả về mảng đã sắp xếp
}

// Kiểm tra hàm
const students = ["An", "Bình", "Chi"];
const scores = [6, 9, 7];
console.log(sortStudentsByScore(students, scores)); // Output: [["Bình", 9], ["Chi", 7], ["An", 6]]
