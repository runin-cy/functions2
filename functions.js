function firstLetterName(name) {
    alert("The name <NAME> starts with the letter <FIRSTLETTEROFNAME>")
}
function divisibleByTwo(n) {
    n = prompt("Enter a number");
    if ( n % 2 == 0){
        result = true;
    }else {
        result = false;
    }
    return result;
}

function largestNum(arr) {
    let max = Math.max(...arr)
 }

firstLetterName();
var result = divisibleByTwo("n");
console.log(result);
var arr =[65, 35, 1005, 560, 101, 5, 16, 850];
console.log(Math.max(...arr));