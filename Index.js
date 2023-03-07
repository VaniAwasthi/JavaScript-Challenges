//current Date and Time//
//solution:1//
function generatingCurrentDateTime() {
var today = new Date();
var date = today.getDate();
var month = today.getMonth()+1; 
var year = today.getFullYear();
document.getElementById("currentDateTime").innerHTML = today;
 }
 //end of solution 1//

 //Given a string, reverse each word in the sentence//
//solution:2//
 function reverseString() {
    input = document.getElementById("inputText").value;
    if(input == '') {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Please Enter a Valid Text ";
    return;
    }
    let reverseResult = "";
    document.getElementById("result").innerHTML = '';
    var i = input.length -1;
    while ( i >= 0) {
    reverseResult = reverseResult + input[i];
    i--;
    }
    document.getElementById("result").style.color = "blue";
    document.getElementById("result").innerHTML = "Reverse string :" + reverseResult;
    }

//end of solution 2//

//Write a function that given the input string name, returns the greeting statement Hello, <name> how are you doing today?//
//Solution 3//
function nameWithMessage(){
    var nameValue = document.getElementById("nameValue").value;
    document.getElementById("result").style.color = "blue";
    document.getElementById("messageValue").innerHTML = "Hello!" + nameValue +" "+ " "+ "how are you doing ?" ;
}
//end of solution 3//

//Return the number count of vowels a, e, i, o, u in the given string. The input string will only consist of lower case letters and/or spaces. for example - console.log getCount'my pyx'; // 0//
//solution4//

function countVowel() {
    var word =document.getElementById("vowelValue").value;
    const reg=/[aeiou]/gi;
    var chars =word.match(reg);
    document.getElementById("countOfVowel").innerHTML= "no of vowel in this word:"+" "+chars.length;
}
//end of solution 4//

//Given a word, your job is to return the middle characters of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.//
//solution:5//
function getMiddle(){
    var words=document.getElementById("evenOdd").value;
    let length= words.length;
    let mid= Math.floor(length/2);
    if(length%2===0){
        document.getElementById("evenOrOdd").innerHTML=words[mid-1] + words[mid];
    }
    else{
        document.getElementById("evenOrOdd").innerHTML= words[mid];
    }}
//write a function that returns the highest and lowest numbers//
//solution 6//
var numArr=[11,14,22,67,89,3,67];
document.getElementById("highestLowest").innerHTML=numArr
function getHighestLowestNumber(){
    document.getElementById("highest").innerHTML= "highest number is:"+Math.max(...numArr);
    document.getElementById("lowest").innerHTML="lowest number is:"+ Math.min(...numArr)
}
//end of solution//

//Write a function that takes any non-negative integer as an argument and returns it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.//
//solution 7//
function convertingInDcendinOrder(){
    var str = document.getElementById("stringNumber").value;
    var numStr = str.split('').map(function(item) {
        return +item;
    });
    var orderedArr = numStr.sort(function(a,b){
     return b-a;
    });
    var orderedStr = orderedArr.join("");
    // console.log(orderedStr)
     document.getElementById("decendingOrder").innerHTML=orderedStr;
}

