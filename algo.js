"use strict";

// Reverse string

var preRevString = "Hey my name is";
var revString = "si eman ym yeH";
var string = "";

var reverseString = function(str) {
  var strArray = str.split('');

  for (var i = strArray.length - 1; i > -1; i--) {
    string += strArray[i];
  }

  return string;
};

// Driver test code
reverseString(preRevString);
// Should come back truthy
console.log("Reverse String", string === revString);


// Return greatest number out of an array

var array1 = [1,2,3,4,5,6];
var array2 = [10,20,1000,50,30];

var maxNum = function(arr) {
  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    max = max > arr[i] ? max : arr[i];
  }

  return max;
};

console.log('------------Greatest Number-----------');
console.log('array1', maxNum(array1) === 6);
console.log('array2', maxNum(array2) === 1000);

// Array of strings return the string that appears the most frequently
// Doesn't handle if multiple freq count

var strings = ["was", "is", "bullshit", "is", "way", "a"];

var freq = function(arr) {
  var placeHolder = {};
  var count = 0;
  var mostUsedNumber;

  for (var i = 0; i < arr.length; i++) {
   placeHolder[arr[i]] = placeHolder[arr[i]] === undefined ? 1 : ++placeHolder[arr[i]];
  }

  for (var key in placeHolder) {

    if (placeHolder[key] > count) {
      count = placeHolder[key];
      mostUsedNumber = key;
    }

  }

  return mostUsedNumber;
};

console.log("String Frequency", freq(strings) === "is" );

// Balanced Parens in an Expression

var exp = "({}}[]]][]";
var exp2 = "()[]{}";

// WARINING MEGAMOTH first iteration >.< Brute Force # BROKEN
var balance = function(str) {
  var strArray = str.split('');
  var braceOpen = 0,
      bracketOpen = 0,
      parenOpen = 0,
      braceClose = 0,
      bracketClose = 0,
      parenClose = 0;

 for (var i = 0; i < strArray.length; i++) {

    switch (true) {
      case braceClose > braceOpen:
      return false;
      case bracketClose > bracketOpen:
      return false;
      case parenClose > parenOpen:
      return false;
    }

    switch (strArray[i]) {
      case "{":
      braceOpen += 1;
      break;
      case "}":
      braceClose += 1;
      break;
      case "(":
      parenOpen += 1;
      break;
      case ")":
      parenClose += 1;
      break;
      case "[":
      bracketOpen += 1;
      break;
      case "]":
      bracketClose += 1;
      break;
    }


  }

  switch (true) {
    case braceOpen - braceClose !== 0:
    return false;
    case bracketOpen - bracketClose !== 0:
    return false;
    case parenOpen - parenClose !== 0:
    return false;
    default:
    return true;
  }

};

console.log('------------------ Balanced {[()]} Expression ------------------')
console.log(balance('([)]') === false) // Failed test case
console.log(balance('([])') === true);
console.log(balance(exp) === false);
console.log(balance(exp2) === true);


// Wife's solution of the same problem - First iteration #Broken

var string = '()',
    string1 = '()[]{}',
    string2 = '(]',
    string3 = '([)]',
    string4 = '([{}])',
    string5 = '([]{})',
    string6 = '([]{}[)',
    string7 = '(][]{}[)',
    string8 = "({}}[]]][]";

function stringValid(string){
  var ary = [],
      shouldReturn,
      setStringValue = function(str){
                        var a = ['(',')'],
                            b = ['{','}']
                        return (a.indexOf(str) != -1) ? -1 : (b.indexOf(str) != -1) ? -2 : -3
      }
// Iterate thru string, set values, and push into array
  for(var i=0, ii=string.length; i< ii;i++){
    var stringValue = ['(','[','{'].indexOf(string[i]) != -1 ? setStringValue(string[i]) : [')',']','}'].indexOf(string[i]) != -1 ? (setStringValue(string[i]) * -1) : 0;
    ary.push(stringValue)
  }
// Determine if opening char has equivalent closing matching char
  for(var i=0,ii=ary.length; i<ii;i++){
    if(ary[i] < 0 && ary[i+1] > 0){
      shouldReturn = ary[i+1] == ary[i] * -1 ? true : false
        if(!shouldReturn){break}
    }
  }
  return shouldReturn
}

console.log(stringValid(string))
console.log(stringValid(string1))
console.log(stringValid(string2))
console.log(stringValid(string3))
console.log(stringValid(string4))
console.log(stringValid(string5))
console.log(stringValid(string6))
console.log(stringValid(string7))
console.log('string 8 shouldReturn false', stringValid(string8)) // Fail

console.log('--------------- my solution her test cases --------------')
console.log(balance(string) === true)
console.log(balance(string1) === true)
console.log(balance(string2) === false)
console.log(balance(string3) === true)
console.log(balance(string4) === true)
console.log(balance(string5) === true)
console.log(balance(string6) === false)
console.log(balance(string7) === false)
console.log(balance(string8) === false)
console.log(balance('({)}') === false)

// My second solution... Impliment a stack data structure.

var isBalanced = function(str) {
  var strArray = str.split('');
  var stack = [];
  var isValid = true;

  for (var i = 0; i < strArray.length; i++) {

    if (strArray[i] === "{" || strArray[i] === "(" || strArray[i] === "[") {
      stack.push( strArray[i] );
    }

    switch (strArray[i]) {
      case "}":
      isValid = stack[stack.length - 1] === "{" ? true : false;
      stack.pop();
      break;
      case ")":
      isValid = stack[stack.length - 1] === "(" ? true : false;
      stack.pop();
      break;
      case "]":
      isValid = stack[stack.length - 1] === "[" ? true : false;
      stack.pop();
      break;
    }

    if (!isValid) return false;
  }

  return isValid;
};

console.log('--------------- my solution her test cases --------------');
console.log('second iteration');
console.log(isBalanced('()') === true);
console.log(isBalanced(string1) === true);
console.log(isBalanced(string2) === false);
console.log(isBalanced("([)]") === false);
console.log(isBalanced('([{}])') === true);
console.log(isBalanced(string5) === true);
console.log(isBalanced(string6) === false);
console.log(isBalanced(string7) === false);
console.log(isBalanced("({}}[]]][]") === false);
console.log(isBalanced('({)}') === false);
console.log(isBalanced(string3) === false);




