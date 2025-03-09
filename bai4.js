let arr=[];
let index=0;
let arr2=[];
let max=+prompt("moi ban nhap so phan tu trong mang");
if(max<0){
    document.write('so luong phan tu khong hop le');
}else if(max==0){
    document.write('mang ko co phan tu');
}else{
    for(let i=0; i<max;i++){
        arr[i]=+prompt("moi ban nhap :").trim();
        if(Number.isInteger(arr[i])){
           arr2[index]=arr[i];
           index++;
        }
    }
    document.write(arr2);
}