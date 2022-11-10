
//Question -1
function max(firstNum, secondNum){
    if(firstNum > secondNum){
        console.log(firstNum + " is larger than " + secondNum);
    }else{
        console.log(secondNum + " is larger then " + firstNum);
    }
    return;
}

max(142, 234);

//Question -2
function maxOfThree(num1, num2, num3) {
    let max = num1;
    if(num2 > max) {
        max = num2;
    } 
    if(num3 > max) {
        max = num3;
    } 
    return max;
}
console.log(maxOfThree(10,20,30));

//Question -3

function isVowel(charIn) {
    const char = charIn.toLowerCase();
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log(isVowel('m'));

//Question -4

var arr = [1, 2, 3, 4];
var sum = 0;
var mul = 1;
for(let i = 0; i<arr.length; i++){
    sum += arr[i];
    mul *= arr[i];
}

console.log("Sum : " + sum);
console.log("Multiply : " + mul);

//Question -5
function reverse(str){
 var newString = "";
 for(let i = str.length -1; i >= 0; i-- ){
    newString +=str[i];
 }
 return newString;
}

console.log(reverse("jag testar"));

//Question -6
function findLongestWord(arr){
    var count = arr[0].length;
    for(let i = 0; i < arr.length; i++){
        if(count < arr[i].length){
            count = arr[i].length;
        }
    }
    return count;
}

var arr1 = ["mango", "Banana", "Orange", "Jackfruit"]
console.log(findLongestWord(arr1));

//Question - 7
function filterLongWords(arr, n){
    var newArray = [];
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i].length > n){
            newArray[i] = arr[i];
        }
    }
    return newArray;
}

var arr2 = ["Mango","Banana","Orenge"];
console.log("Containing words are: " + filterLongWords(arr2 , 5));

//Question - 8
const values = [1,2,3];
const conmputeSumOfSquares = values.reduce((a , b) => a + b **2, 0);
console.log("Sum of Squares is :" + conmputeSumOfSquares);

//Question -9
const oddOnly= [1, 2, 3, 4, 5, 6, 7, 8];
const printOddNumbersOnly = oddOnly.filter((odd) => odd % 2 != 0);
console.log("The Odd Number is : " + printOddNumbersOnly);

//Question -10
const evenOnly = [1, 2, 3, 4, 5];
const conmputeSumOfSquaresOfEvensOnly = evenOnly.filter((even) => even % 2 == 0 ).reduce ((a, b) => a + b **2, 0);

console.log("Sum Of the Squares of Even only : " + conmputeSumOfSquaresOfEvensOnly);

//Question -11
const arr4 = [1,2,3,4];
const initialSum = 0;
const initialMul = 1;
const sumFun = arr4.reduce((preVal, curVal) => (preVal + curVal), initialSum);
const MulFun = arr4.reduce((preVal, curVal) => (preVal * curVal), initialMul);
 console.log("Sum Using Function Programming :" + sumFun);
 console.log("Multifly Using Function Programming :" + MulFun);

 //Question -12
 var arrSec = [2, 1, 5, 4, 3];
 const findSecondBiggest = arrSec.sort()[arrSec.length -2];

 console.log("Secound Biggest Number :" + findSecondBiggest);

 //Question -13
 const number = parseInt(10);
 let n1 = 0, n2 = 1, nextTerm;
 console.log("Fibonacci Series :");
 for (let i = 0; i <= number; i++){
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
 }

 //Question -14
 window.onload = function(){
    document.getElementById("login").addEventListener("Click", loginUser);
    var loginFrom = document.getElementById("login-from");
    let txt = "";
    for(let i = 0; i < loginFrom.length - 1; i++){
        txt +=loginFrom.elements[i].value + "<br>";
    }
    document.write(txt);
 }

 //add product
 let product = document.getElementById("add-product");
 product.onclick = addProduct;
 function addProduct(){
    var productFrom = document.getElementById("product-from");
    let txt = "";
    for(let i = 0; i < productFrom.length-1; i++){
        txt +=productFrom.elements[i].value + "<br/>";
    }
    document.write(txt);
 }

 //Question -15
 let tickingCounterClock = setInterval(function(){
    const currentData = new Date();
    let dateTime = currentData.getDate() + "/"
    + currentData.getMonth() +"/"
    + currentData.getFullYear() +"/"
    + currentData.getHours() + "/"
    + currentData.getMinutes() +"/"
    + currentData.getSeconds();

    document.getElementById("clock").innerHTML = dateTime;
 }, 1000);