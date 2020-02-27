let array = [1,2, 'toi',35,'troi','jjj'];
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        count++
    }
}
alert(count);