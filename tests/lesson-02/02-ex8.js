// In các số cách nhau 4 đơn vị từ 1 đến 100
let result8 = [];
for (let i = 1; i <= 100; i += 4) {
  result8.push(i);
} // tăng i thêm 4 sau mỗi vòng lặp (tương đương i = i + 4)
console.log(result8.join(', '));