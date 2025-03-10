let choice;
let arr = [];
let a;
let sum = 0;
let up2;
do {
    choice = prompt(`
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra giá trị các phần tử chẵn và tính tổng
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
        6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
        7. Thêm một phần từ vào vị trí chỉ định
        8. Thoát`);
    switch (choice) {
        case "1":
            a = Number(prompt('moi ban nhap so phan tu muon them'));
            for (let i = 0; i < a; i++) {
                arr[i] = Number(prompt("moi ban nhap phan tu thu " + (i + 1)));
            }
            break;
        case "2":
            console.log(arr);
            break;
        case "3":
            for (let i = 0; i < a; i++) {
                if (arr[i] % 2 == 0) {
                    console.log(arr[i]);
                    sum = sum + arr[i];
                }
            }
            console.log('tong : ' + sum);
            break;
        case "4":
            let max = arr[0];
            let min = arr[0];
            for (let i = 0; i < 0; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                }
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            console.log('max: ' + max);
            console.log('min: ' + min);
            break;
        case "5":
            let sumPrime = 0;
            console.log("Các số nguyên tố trong mảng:");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < 10) {
                    switch (arr[i]) {
                        case 2:
                        case 3:
                        case 5:
                        case 7:
                            console.log(arr[i]);
                            sumPrime += arr[i];
                            break;
                    }
                } else {
                    if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0 && arr[i] % 5 !== 0 && arr[i] % 7 !== 0) {
                        console.log(arr[i]);
                        sumPrime += arr[i];
                    }
                }
            }
            console.log("Tổng các số nguyên tố:", sumPrime);
            break;
        case "6":
            let search = +prompt("Nhập một số");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === search) {
                    count++;
                }
            }
            console.log(`Số ${search} xuất hiện ${count} lần trong mảng.`);
            break;
        case "7":
            let numbers = +prompt("nhap so muon them");
            let index= +prompt("nhap vi tri muon them");
            arr.splice(index,0,numbers);
            console.log(arr);
        default:
            break;
    }
} while (choice !== "8");