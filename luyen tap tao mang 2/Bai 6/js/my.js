let a = prompt('nhap vao chuoi ky tu');
let array = a.split('');
console.log(array);
for(i=0;i<array.length;i++){
    if(array[i]=='-'){
        array[i]='_'
    }
}
alert(array);