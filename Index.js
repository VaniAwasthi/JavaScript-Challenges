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
