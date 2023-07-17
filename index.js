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

document.querySelector("#bt4").onclick = function () {
  // số nhỏ nhất ban đầu là chưa có = 0
  var numMin = 0;
  // vị trí số nhỏ nhất ban đầu mặc định là thứ 0
  var vMin = arrNum[0];
  // index ban đầu mặc định cũng là thứ 0
  var iMin = 0;
  // duyệt toàn mảng
  for (var i = 0; i < arrNum.length; i++) {
    // nếu giá trị ban đầu nhỏ hoặc bằng giá trị thứ 0 ban đầu
    if (arrNum[i] <= vMin && arrNum[i] > 0) {
      // thì gán lại cho vMin bằng giá trị mới là số mới nhỏ hơn và lớn hơn 0
      vMin = arrNum[i];
      // lấy vị trí index của số nhỏ nhất đó
      iMin = i;
    }
    // gán số nhỏ nhất cho giá trị 0 ban đầu với thứ index xác định
    numMin = arrNum[iMin];
  }
  //hiển thị kết quả lên giao diện
  document.querySelector("#kq-bt4").innerHTML =
    "Số nguyên dương nhỏ nhất: " + numMin;
};

// Bài 5
document.querySelector("#bt5").onclick = function () {
  // giá trị ban đầu
  var kq5 = 0;
  // cho lặp ngược để tìm giá trị
  for (var i = arrNum.length; i >= 0; i--) {
    // điều kiện phải chia hết thì mới là số chẵn
    if (arrNum[i] % 2 === 0) {
      var lastI = i;
      break;
    }
  }
  kq5 = arrNum[lastI];

  //hiển thị kết quả lên giao diện
  document.querySelector("#kq-bt5").innerHTML = "Số chẵn cuối cùng: " + kq5;
};

// Bài 6 - Đổi vị trí
document.querySelector("#bt6").onclick = function () {
  var lc1 = Number(document.querySelector("#lc-1").value);
  var lc2 = Number(document.querySelector("#lc-2").value);
  // output: tổng của số dương
  var kq6 = "";
  // điều kiện đầu vào phải thoả
  if (
    lc1 < lc2 &&
    lc1 >= 0 &&
    lc1 < arrNum.length &&
    lc2 >= 1 &&
    lc2 < arrNum.length + 1
  ) {
    document.querySelector("#kq-bt6").innerHTML = "Vị trí không hợp lệ";
  }

  // đổi vị trí theo người dùng yêu cầu lưu ý phải - 1 do người user không biết thứ tự của lập trình
  else var changeLC1 = arrNum[lc1 - 1];
  arrNum[lc1 - 1] = arrNum[lc2 - 1];
  arrNum[lc2 - 1] = changeLC1;
  kq6 = arrNum;

  //hiển thị kết quả lên giao diện
  document.querySelector("#kq-bt6").innerHTML =
    "Kết quả sau khi đổi vị trí: " + kq6;
};

// Bài 7
document.querySelector("#bt7").onclick = function () {
  // Sau khi sắp xếp mảng
  var kq7 = "";
  // Sắp xếp mảng theo thứ tự tăng dần
  arrNum.sort(function (a, b) {
    return a - b;
  });
  kq7 = arrNum;
  //hiển thị lên giao diện
  document.querySelector("#kq-bt7").innerHTML = "Mảng sau khi sắp xếp: " + kq7;
};

// Bài 8

document.querySelector("#bt8").onclick = function () {
  // output: số nguyên tố đầu tiên
  var kq8 = "";
  // process: Tìm số nguyên tố đầu tiên
  for (var i = 0; i < arrNum.length; i++) {
    var demUoc = 0;
    for (var x = 1; x <= arrNum[i]; x++) {
      if (arrNum[i] % i === 0) {
        demUoc++;
      }
    }
    if (demUoc == 2) {
      kq8 = "số nguyên tố đầu tiên là: " + arrNum[i];
      break;
    } else {
      // ketQuabt8 = "số nguyên tố không tồn tại";
      kq8 = "-1";
    }
  }

  //hiển thị kết quả lên giao diện
  document.querySelector("#kq-bt8").innerHTML = kq8;
};

//Bài 9
var arrNewNum = [];
document.querySelector("#them9").onclick = function () {
  // input: người dùng nhập vào
  var mangMoi = +document.querySelector("#nhap-mang").value;
  // process: đẩy số mà người dùng nhập lên mảng arrNewNumber
  arrNewNum.push(mangMoi);
  // Hiển thị thông tin arrNewNumber lên giao diện
  document.querySelector("#kq-ts9").innerHTML = "Mảng mới: " + arrNewNum;
};
document.querySelector("#kq-bt9").onclick = function () {
  var kq9 = 0;
  var TongArrNewNum = 0;
  // Tìm Tổng số nguyên của mảng
  for (var i = 0; i < arrNewNum.length; i++) {
    var soNguyenArrNarrNumberN = Number.isInteger(arrNewNum[i]);
    if (soNguyenArrNarrNumberN == true) {
      TongArrNewNum++;
    }
  }
  kq9 = TongArrNewNum;
  //hiển thị kết quả lên giao diện
  document.querySelector("#kq-bt9").innerHTML = "Tổng số nguyên: " + kq9;
};
// Bài 10
document.querySelector("#bt10").onclick = function () {
  // output: kết quả sau khi sắp xếp mảng
  var kq10 = "";
  var soDuong = 0;
  var soAm = 0;
  // process: Sắp xếp mảng theo thứ tự tăng dần
  //tìm tổng số nguyên dương
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      soDuong++;
    }
    if (arrNum[i] <= 0) {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    kq10 = "Số dương nhiều hơn số âm";
  } else if (soDuong < soAm) {
    kq10 = "Số âm nhiều hơn số dương";
  } else {
    kq10 = "Số âm và số dương bằng nhau";
  }
  //hiển thị kết quả lên giao diện
  document.querySelector("#kq-bt10").innerHTML =
    "Tổng số dương: " + soDuong + ", số âm: " + soAm + " => Vì vậy " + kq10;
};
