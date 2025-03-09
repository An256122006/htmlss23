let arr = [];
let max = 0;
let max2 = 0;
let n = +prompt("moi ban nhap so phan tu trong mang");
if (n < 0) {
    document.write('so luong phan tu khong hop le');
} else if (n== 0) {
    document.write('mang ko co phan tu');
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("moi ban nhap :").trim();
        if (arr[i] > max && Number.isInteger(arr[i])) {
            max = arr[i];
        }
    }
    for (let i = 0; i < n; i++) {
        if (arr[i] > max2 && arr[i] != max) {
            max2 = arr[i];
        }
    }
    document.write(max2);
}