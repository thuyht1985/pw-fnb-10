// 01. Loại bỏ khoảng trắng thừa, viết hoa chữ cái đầu mỗi từ

function formatName(fullName) {
    // Bước 1: Loại bỏ khoảng trắng thừa
    const trimmedName = fullName.trim();
    
    // Bước 2: Tách chuỗi thành các từ
    const words = trimmedName.split(/\s+/); // Tách theo khoảng trắng
    
    // Bước 3: Viết hoa chữ cái đầu mỗi từ
    const formattedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    
    // Bước 4: Kết hợp lại thành chuỗi
    return formattedWords.join(' ');
}

// Kiểm tra hàm
console.log(formatName("  nguyễn văn   an  ")); // "Nguyễn Văn An"

// 02. Kiểm tra email có chứa @ và .com không

function validateEmail(email) {
    // Bước 1: Kiểm tra sự tồn tại của ký tự '@'
    const hasAtSymbol = email.includes('@');
    
    // Bước 2: Kiểm tra xem email có kết thúc bằng '.com'
    const endsWithCom = email.endsWith('.com');
    
    // Bước 3: Trả về true nếu cả hai điều kiện đều đúng
    return hasAtSymbol && endsWithCom;
}

// Kiểm tra hàm
console.log(validateEmail("test@gmail.com")); // true
console.log(validateEmail("test@gmail"));      // false
console.log(validateEmail("test.com"));        // false
console.log(validateEmail("test@gmail.org"));  // false


// 03. Lấy tên miền từ email

function extractDomain(email) {
    // Bước 1: Tìm vị trí của ký tự '@'
    const atIndex = email.indexOf('@');
    
    // Bước 2: Lấy phần tên miền từ vị trí sau ký tự '@'
    const domain = email.slice(atIndex + 1);
    
    // Bước 3: Trả về tên miền
    return domain;
}

// Kiểm tra hàm
console.log(extractDomain("user@gmail.com")); // "gmail.com"
console.log(extractDomain("admin@yahoo.com")); // "yahoo.com"
console.log(extractDomain("example@domain.org")); // "domain.org"


// 04. Tạo username từ họ tên (viết thường, thay khoảng trắng bằng _)

function createUsername(fullName) {
    // Bước 1: Chuyển đổi thành chữ thường
    const lowerCaseName = fullName.toLowerCase();
    
    // Bước 2: Thay thế khoảng trắng bằng dấu gạch dưới
    const username = lowerCaseName.replace(/\s+/g, '_');
    
    // Bước 3: Trả về username
    return username;
}

// Kiểm tra hàm
console.log(createUsername("Nguyễn Văn An")); // "nguyen_van_an"
