let arr = [NaN, "test", 4];
for(let i=0; i<3;i++){
    if(!arr[i]){
        arr.splice(i,1);
    }
}
document.write(arr);