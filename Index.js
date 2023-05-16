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
    let filteredStr1 = str1.replace(/[^0-9a-zA-Z]/gi, '');
    let filteredStr2 = str2.replace(/[^0-9a-zA-Z]/gi, ''); 
    for (let i = 0; i < filteredStr2.length; i++) {
      if (filteredStr1.indexOf(filteredStr2[i]) === -1) {
        console.log("false");
        document.getElementById("Scrumbleresult").innerHTML="false"
      }
      filteredStr1 = filteredStr1.replace(filteredStr2[i], '');
    }
    document.getElementById("Scrumbleresult").innerHTML="true"
    console.log("true")
  }
//end of solution
//Draw a circle inside square using single DIV in css.
//solution 13
  function draw()
  {
        var canvas = document.getElementById('circle');
        if (canvas.getContext)
        {
        var ctx = canvas.getContext('2d'); 
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = 45;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();
        }
        }
//end of solution//
//Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of the number, for the multiples of ‘5’ print “Buzz” and for multiple of both 3 and 5 print "FizzBuzz".
//solution 14//
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      let x = i % 3 === 0;
      let y = i % 5 === 0;
      if (x && y) {
        console.log("FizzBuzz");
      } else if (x) {
        console.log("Fizz");
      } else if (y) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
    return i;
   }
// Write a function that takes two strings (a and b) as arguments // If a contains b, append b to the beginning of a // If not, append it to the end // Return the concatenation Add Answer
//solution no 17
function myFunction(a, b) {
  var a=document.getElementById("1").value
  var b =document.getElementById("2").value
  let concatVar=document.getElementById("concate")
  const concate=a.indexOf(b) === -1 ? a + b : b + a;
  concatVar.innerHTML= concate
}
//end of solution//
//Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.//
//solution 18//
function checkingEquallity(arr){ 
  var arr =document.getElementById("3").value
  var equLL= new Set(arr).size === 1;
  document.getElementById("equall").innerHTML=equLL

}
//end of solution
// Write a function that takes two date instances as argument. It should return the number of days that lies between those dates//
//solution 19//
// let firstDate= document.getElementById("4").value
// let SecondDate= document.getElementById("5").value
// function noOFDays(firstDate , SecondDate) {
 
//   let noOfDays= Math.floor((Date.UTC(SecondDate.getFullYear(), SecondDate.getMonth(),SecondDate.getDate()) - Date.UTC(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate()) ) /(1000 * 60 * 60 * 24));
//   // document.getElementById("numberdate").innerHTML=noOFDays
//   console.log(noOFDays)
// }
function date_diff_indays(){
  var d1 = new Date("08/14/2020");   
var d2 = new Date("09/14/2020");   
    
var diff = d2.getTime() - d1.getTime();   
    
var daydiff = diff / (1000 * 60 * 60 * 24);   
document.getElementById("numberdate").innerHTML=" Total number of days between "+ " " + d1 + " " + "and" +""+ d2 + " " + "is : "+ "" + daydiff + " days";   

}
//print  pattern//
//solution 20
function printingPattern(){
  let n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  document.getElementById("pattern").innerHTML="see result in console"
console.log(string)
}
//end of solution//
//Square Star Pattern in Javascript//
//solution 21//
function squarePattern(){
  let n=5;
  let strng="";
  for(let i=0;i<n;i++){
    for(let j=0; j <n;j++){
      strng+="*";
    }
    strng+="\n"
  }
  document.getElementById("square").innerHTML="for rsult go to console"
  console.log(strng)
}
//end of sollution//
//downward triangle star pattern
//solution 22//
function downwardPattern(){
  let n=8;
  let space="";
  for(let r=0;r<n;r++){
    for(let v=0; v<n-r; v++){
      space+= "*"
    }
    space+="\n"
  }
  document.getElementById("downward").innerHTML="for result go to console"
  console.log(space)
}
//end of solution//
//print albhabetic pattern
function alphabeticPattern(){
  let n = 5; 
let string = "";
for (let i = 1; i <= n; i++) {
  
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}
document.getElementById("alpha").innerHTML="Go to console for result"
console.log(string);
}
function alphabeticPattern2(){
  let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode((i - 1) + 65);
  }
  string += "\n";
}
document.getElementById("alpha2").innerHTML="Go to console for result"
console.log(string);
}

//end of solution//

function longest_str_in_array()
  {
    var arra= ["abc", "ab" , "bcd"]
    let max_str = arra[0].length;
    let ans = arra[0];
    for (let i = 1; i < arra.length; i++) {
        const maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    document.getElementById("longString").innerHTML="for result go to console"
    console.log(ans);
}
//end of solution//
//Write a function that takes a string and returns the character that is most commonly used in the string.
const test = () => { 
  var str=document.getElementById("set").value;
  if (str.length === 0) 
   {
   return 'String should not be empty!'
  }
   if (typeof str !== 'string')
    {
      return 'It must be a string.'
    }
 const occurrence_Map = new Map()

 for (const char of str) 
   {
     occurrence_Map.set(char, occurrence_Map.get(char) + 1 || 1)
   }

 // find the max char from the occurrence map
 let max_char = { char: '', occur: -Infinity }

 for (const [char, occur] of occurrence_Map) {
   if (occur > max_char.occur) {
     max_char = { char,occur }
   }
 }
document.getElementById("pra").innerHTML="see console for result"
 console.log(max_char.char) 
}
//end of solution//
// program to check if the string is palindrome or not

function palindrome(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome'
}
function check(){
const string = document.getElementById("palli").value;
const value = palindrome(string);

document.getElementById("ans").innerHTML=value

}
