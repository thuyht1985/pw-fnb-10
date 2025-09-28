// 01. Tạo calculator thực hiện phép tính cơ bản

function basicCalculator(operation, a, b) {
    // Kiểm tra loại phép toán và thực hiện tính toán tương ứng
    switch (operation) {
        case "add":
            return a + b; // Cộng
        case "multiply":
            return a * b; // Nhân        
    }
}

// Kiểm tra hàm
console.log(basicCalculator("add", 5, 3));       // Output: 8
console.log(basicCalculator("multiply", 4, 6));  // Output: 2


// 02. Tính thuế (mặc định 10%)

function calculateTax(amount, taxRate = 0.1) {
    // Tính thuế
    return amount * taxRate; // Trả về số thuế tính được
}

// Kiểm tra hàm
console.log(calculateTax(1000, 0.15)); // Output: 150
console.log(calculateTax(2000));        // Output: 200 (vì taxRate mặc định là 0.1)
console.log(calculateTax(500));         // Output: 50 (vì taxRate mặc định là 0.1)


// 03. Tạo calculator tính giá sau khi giảm giá

function calculateDiscount(originalPrice, discountPercent) {
    // Tính giá sau khi giảm giá
    const discountAmount = originalPrice * (discountPercent / 100); // Tính số tiền giảm giá
    const finalPrice = originalPrice - discountAmount; // Tính giá cuối cùng sau khi giảm
    return finalPrice; // Trả về giá cuối cùng
}

// Kiểm tra hàm
console.log(calculateDiscount(100, 20)); // Output: 80


// 04. Tạo calculator tính lãi kép: A = P(1 + r/n)^(nt)

function calculateCompoundInterest(principal, rate, time, compound = 1) {
    // Tính lãi kép: A = P(1 + r/n)^(nt)
    const amount = principal * Math.pow((1 + rate / compound), (compound * time)); // Tính tổng số tiền
    return amount; // Trả về tổng số tiền sau khi tính lãi kép
}

// Kiểm tra hàm
console.log(calculateCompoundInterest(1000, 0.05, 2, 12)); // Output: ~1104.94


// 05. Format tiền tệ

function formatCurrency(amount, currency = "VND") {
    // Kiểm tra xem amount có phải là số không
    if (isNaN(amount)) {
        return "Invalid amount"; // Trả về thông báo lỗi nếu amount không hợp lệ
    }

    // Chuyển đổi số tiền thành chuỗi và định dạng
    const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Trả về chuỗi đã định dạng với đơn vị tiền tệ
    return `${formattedAmount} ${currency}`;
}

// Kiểm tra hàm
console.log(formatCurrency(1234567, "VND")); // Output: "1,234,567 VND"
console.log(formatCurrency("abc")); // Output: "Invalid amount"
