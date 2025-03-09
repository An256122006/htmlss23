let arr=[];
let arr2=[];
let index=0;
for(let i=0; i<10;i++){
    arr[i]=+prompt("moi ban nhap :");
    if(arr[i]>=10 && Number.isInteger(arr[i])){
        arr2[index]=arr[i];
        index++;
    }
}
if(arr2.length>0){
    document.write(arr2);
}else{
    document.write('khong co so nao  lon hon 10');
}