// Input thêm số và mảng
// cho mảng rỗng
var arrNum = [];
// func nhận thông số nhập
document.querySelector("#btn-nhap-so").onclick = function () {
  // hứng số cần nhập
  var nhapNum = +document.querySelector("#nhap-so").value;
  // push = đẩy thêm số vào cuối mảng
  arrNum.push(nhapNum);
  // ghi lên giao diện người dùng
  document.querySelector("#kq").innerHTML = arrNum;
};

// Bài 1 - Tính tổng của mảng
document.querySelector("#bt1").onclick = function () {
  var tong = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] >= 0) {
      tong += arrNum[i];
    }
  }
  // đưa ra giao diện user
  document.querySelector("#kq-bt1").innerHTML = "tổng: " + tong;
};

// Bài 2 - đếm số mảng
document.querySelector("#bt2").onclick = function () {
  // Giá trị ban đầu là chưa có = 0
  var dem = 0;
  // Vòng lập kiểm tra số dương >=0
  for (var i = 0; i < arrNum.length; i++) {
    // Đúng đk mới đếm
    if (arrNum[i] >= 0) {
      dem++;
    }
  }
  // đưa ra giao diện user
  document.querySelector("#kq-bt2").innerHTML = "Tổng số đếm được: " + dem;
};

// Bài 3 - Tìm số nhỏ nhất
document.querySelector("#bt3").onclick = function () {
  // số nhỏ nhất ban đầu là chưa có = 0
  var numMin = 0;
  // vị trí số nhỏ nhất ban đầu mặc định là thứ 0
  var vMin = arrNum[0];
  // index ban đầu mặc định cũng là thứ 0
  var iMin = 0;
  // duyệt toàn mảng
  for (var i = 0; i < arrNum.length; i++) {
    // nếu giá trị ban đầu nhỏ hoặc bằng giá trị thứ 0 ban đầu
    if (arrNum[i] <= vMin) {
      // thì gán lại cho vMin bằng giá trị mới là số mới nhỏ hơn
      vMin = arrNum[i];
      // lấy vị trí index của số nhỏ nhất đó
      iMin = i;
    }
    // gán số nhỏ nhất cho giá trị 0 ban đầu với thứ index xác định
    numMin = arrNum[iMin];
  }
  //hiển thị kết quả lên giao diện
  document.querySelector("#kq-bt3").innerHTML = "Số nhỏ nhất: " + numMin;
};

// Bài 4 - Tìm số dương nhỏ nhất
