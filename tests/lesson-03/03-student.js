// -	Tạo class Student để quản lý thông tin học sinh

class Student {
    constructor(name, age, studentId) {
        // Khởi tạo thông tin học sinh
        this.name = name;
        this.age = age;
        this.studentId = studentId;
        this.scores = []; // Mảng lưu điểm
        this.subjects = []; // Mảng lưu môn học
    }

    addScore(subject, score) {
        // Thêm điểm cho môn học
        this.scores.push(score); // Thêm điểm vào mảng scores
        this.subjects.push(subject); // Thêm môn học vào mảng subjects
    }

    getAverageScore() {
        // Tính điểm trung bình tất cả môn
        const total = this.scores.reduce((acc, score) => acc + score, 0);
        return this.scores.length > 0 ? (total / this.scores.length).toFixed(2) : 0; // Trả về điểm trung bình
    }

    getGrade() {
        // Xếp loại
        const averageScore = this.getAverageScore();
        if (averageScore >= 8.5) return "Giỏi";
        if (averageScore >= 7) return "Khá";
        if (averageScore >= 5) return "Trung bình";
        return "Yếu";
    }

    getSubjectCount() {
        // Đếm số môn học đã có điểm
        return this.subjects.length; // Trả về số lượng môn học
    }

    displayInfo() {
        // Hiển thị thông tin đầy đủ của học sinh
        console.log(`Tên: ${this.name}`);
        console.log(`Tuổi: ${this.age}`);
        console.log(`Mã SV: ${this.studentId}`);
        console.log(`Điểm trung bình: ${this.getAverageScore()}`);
        console.log(`Xếp loại: ${this.getGrade()}`);
    }

    isEligibleForScholarship(minAverage = 8.0) {
        // Kiểm tra đủ điều kiện học bổng không
        return this.getAverageScore() >= minAverage; // Trả về true hoặc false
    }
}

// Kiểm tra lớp Student
const student1 = new Student("Nguyễn Văn An", 20, "SV001");
student1.addScore("Toán", 8.5);
student1.addScore("Lý", 7.5);
student1.addScore("Hóa", 9.0);

console.log(student1.getAverageScore()); // Output: 8.33
console.log(student1.getGrade()); // Output: "Khá"
console.log(student1.isEligibleForScholarship()); // Output: true
student1.displayInfo();
