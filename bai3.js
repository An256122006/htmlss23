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
        if(arr[i]<0 && Number.isInteger(arr[i])){
           index++;
        }
    }
    document.write(index);
}