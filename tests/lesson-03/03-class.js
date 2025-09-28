// Tạo hệ thống quản lý lớp học hoàn chỉnh

class ClassRoom {
    constructor(className, teacher) { // Khởi tạo lớp học với tên lớp, giáo viên, danh sách học sinh và môn học.
        this.className = className; // Tên lớp
        this.teacher = teacher; // Tên giáo viên
        this.students = []; // Danh sách học sinh
        this.subjects = ["Toán", "Lý", "Hóa", "Văn", "Anh"]; // Môn học
    }

    // 1. Quản lý học sinh
    addStudent(student) {
        // Thêm học sinh vào lớp
        const exists = this.students.some(s => s.studentId === student.studentId); // Kiểm tra xem mã học sinh đã tồn tại chưa.
        if (exists) {
            console.log(`Học sinh với mã ${student.studentId} đã tồn tại.`);
            return;
        }
        this.students.push(student); // Thêm học sinh vào danh sách
    }

    removeStudent(studentId) {
        // Xóa học sinh khỏi lớp
        this.students = this.students.filter(s => s.studentId !== studentId);
    }

    findStudent(keyword) {
        // Tìm học sinh theo tên hoặc mã (không phân biệt hoa thường)
        return this.students.filter(s => 
            s.name.toLowerCase().includes(keyword.toLowerCase()) || 
            s.studentId.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    // 2. Thống kê và báo cáo
    getClassAverage() {
        // Tính điểm trung bình của cả lớp
        const totalScores = this.students.reduce((acc, student) => {
            const averageScore = student.getAverageScore();
            return acc + averageScore;
        }, 0);
        return (totalScores / this.students.length).toFixed(2);
    }

    getTopStudents(count = 3) {
        // Lấy top học sinh giỏi nhất
        return this.students
            .sort((a, b) => b.getAverageScore() - a.getAverageScore())
            .slice(0, count);
    }

    getSubjectStatistics(subject) {
        // Thống kê điểm môn học
        const scores = this.students.map(s => s.scores.find(score => score.subject === subject));
        const validScores = scores.filter(score => score !== undefined).map(score => score.score);

        const highest = Math.max(...validScores);
        const lowest = Math.min(...validScores);
        const average = (validScores.reduce((acc, score) => acc + score, 0) / validScores.length).toFixed(2);

        const gradeDistribution = {
            excellent: validScores.filter(s => s >= 8.5).length,
            good: validScores.filter(s => s >= 7 && s < 8.5).length,
            average: validScores.filter(s => s >= 5 && s < 7).length,
            poor: validScores.filter(s => s < 5).length,
        };

        return { highest, lowest, average, gradeDistribution };
    }

    generateReport() {
        // Tạo báo cáo tổng hợp lớp học
        const report = {
            className: this.className,
            teacher: this.teacher,
            students: this.students.map(s => ({
                name: s.name,
                studentId: s.studentId,
                averageScore: s.getAverageScore(),
            })),
            classAverage: this.getClassAverage(),
        };
        console.log(report);
    }

    // 3. Xử lý dữ liệu nâng cao
    exportStudentList(format = "simple") {
        // Export danh sách học sinh
        if (format === "simple") {
            return this.students.map(s => `${s.studentId}, ${s.name}`).join('\n');
        } else if (format === "detailed") {
            return this.students.map(s => `${s.studentId}, ${s.name}, ${s.getAverageScore()}`).join('\n');
        } else if (format === "grades") {
            return this.students.map(s => `${s.studentId}, ${s.getGrades()}`).join('\n');
        }
    }

    importScoresFromString(dataString) {
        // Import điểm từ chuỗi CSV
        const dataLines = dataString.split('\n');
        dataLines.forEach(line => {
            const [studentId, subject, score] = line.split(',');
            const student = this.students.find(s => s.studentId === studentId);
            if (student) {
                student.addScore(subject.trim(), parseFloat(score.trim()));
            }
        });
    }

    validateAllData() {
        // Kiểm tra tính hợp lệ của dữ liệu
        const ids = new Set();
        for (const student of this.students) {
            if (student.scores.some(score => score < 0 || score > 10)) {
                console.log(`Điểm không hợp lệ cho học sinh ${student.name}`);
            }
            if (ids.has(student.studentId)) {
                console.log(`Mã học sinh ${student.studentId} bị trùng.`);
            }
            ids.add(student.studentId);
        }
    }
}

// Utility functions hỗ trợ
class DataProcessor {
    static formatStudentData(students) {
        // Format dữ liệu học sinh để hiển thị
        return students.map(s => `${s.name} (${s.studentId}) - Điểm TB: ${s.getAverageScore()}`).join('\n');
    }

    static calculateGradeDistribution(students) {
        // Tính phân bố điểm: bao nhiêu % Giỏi, Khá, TB, Yếu
        const total = students.length;
        const distribution = {
            excellent: students.filter(s => s.getAverageScore() >= 8.5).length / total * 100,
            good: students.filter(s => s.getAverageScore() >= 7 && s.getAverageScore() < 8.5).length / total * 100,
            average: students.filter(s => s.getAverageScore() >= 5 && s.getAverageScore() < 7).length / total * 100,
            poor: students.filter(s => s.getAverageScore() < 5).length / total * 100,
        };
        return distribution;
    }

    static generateStudentId(name, existingIds) {
        // Tự động tạo mã học sinh từ tên
        let id = name.split(' ').map(word => word[0]).join('').toUpperCase();
        let count = 1;
        while (existingIds.has(id)) {
            id = `${id}${count++}`;
        }
        return id;
    }

    static parseCSVData(csvString) {
        // Parse dữ liệu CSV thành array objects
        const lines = csvString.trim().split('\n');
        return lines.map(line => {
            const [studentId, subject, score] = line.split(',');
            return { studentId: studentId.trim(), subject: subject.trim(), score: parseFloat(score.trim()) };
        });
    }
}
