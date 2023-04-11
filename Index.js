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
//end//

//Given an array of numbers, write a function that returns the sum of all of the positives ones. If the array is empty, the sum should be 0//
//solution 8//
var arr=[11,5,6,7];
    document.getElementById("ArrayNumber").innerHTML=arr
function positiveSum() {
    var sum = 0;
     
    // Running the for loop
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>0){
            sum= sum + arr[i];
        }
       
    }
    document.getElementById("SummOfNum").innerHTML=sum;

}  
//end of solution

//Write a function that given an input URL, returns its domain name. 
//solution 9
var url="https://github.com"
document.getElementById("url").innerHTML=url
function getDomainName(){
    var res=url.replace('https://','');
    console.log(res);
    document.getElementById("DomainName").innerHTML=res
}
//end of solution//
//Complete the solution so that the function will break up camel casing, using a space between words//
//solution 10//

function getCamelCase(){
    var text=document.getElementById("camelcaseConvert").value
    const result = text.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")
    ;
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    console.log(finalResult);
    document.getElementById("CamelCase").innerHTML=finalResult;
}
//end of solution//
// Write a function that given an integer array nums of length n, returns an array of length 2n where nums is concatenated to itself.//
//solution 11//
var nums = [1,2,3,1]
document.getElementById("ConcateArray").innerHTML=nums
function getConcatenation() {
    const numLength=nums.length;
    for(let i=0; i<numLength;i++){
        nums.push(nums[i])
    }
    console.log(nums);
    document.getElementById("concateValue").innerHTML=nums
};
//end of solution//
//Write a function that accepts two strings and returns true if some or all of the characters in the first string can be rearranged to match the second string.//
//solution 12//
function StringScramble() {
    var str1=document.getElementById("stringone").value
    var str2=document.getElementById("stringtwo").value
    // for each element of str2, remove the punctuation and symbols
    // this is more for robustness
    let filteredStr1 = str1.replace(/[^0-9a-zA-Z]/gi, '');
    let filteredStr2 = str2.replace(/[^0-9a-zA-Z]/gi, '');
  
    for (let i = 0; i < filteredStr2.length; i++) {
      // replace element if it exists in filteredStr1
      if (filteredStr1.indexOf(filteredStr2[i]) === -1) {
        console.log("false");
        document.getElementById("Scrumbleresult").innerHTML="false"

      }
      filteredStr1 = filteredStr1.replace(filteredStr2[i], '');
    }
    document.getElementById("Scrumbleresult").innerHTML="true"
    console.log("true")
  }



  

