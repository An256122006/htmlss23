let arr=[];
let index=0;
let max=arr[0];
for(let i=0; i<10;i++){
    arr[i]=+prompt("moi ban nhap :").trim();
    if(arr[i]>max && Number.isInteger(arr[i])){
       max=arr[i];
       index=i;
    }
}
if(index==0){
    document.write('khong co so nao lon nhat');
}else{
    document.write(max);
    document.write('<br>');
    document.write(i);
}