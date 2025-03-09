let arr=[];
let index=0;
let max=+prompt("moi ban nhap so phan tu trong mang");
if(max<0){
    document.write('so luong phan tu khong hop le');
}else if(max==0){
    document.write('mang ko co phan tu');
}else{
    for(let i=0; i<max;i++){
        arr[i]=+prompt("moi ban nhap :").trim();
    }
    for(let i=2;i<max;i++){
        if(arr[i]==arr[i-1]+arr[i-2]){
            index++;
        }
    }
}
if(index==max-2){
    document.write(' day la day fibonaci');
}else{
    document.write("khong phai day fibonacci");
}