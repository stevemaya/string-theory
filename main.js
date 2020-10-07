/******************
 * YOUR CODE HERE *
 ******************/

function xify(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr += 'x';
  }

  return newStr;
}


function smilify(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr += '😊';
  }

  return newStr;
}

function yellingChars(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + '!';
  }
  return newStr;
}


function indexedChars(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += i + str[i];
  }
  return newStr;
}

function numberedChars(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += '(' + (i + 1) + ')' + str[i];
  }
  return newStr;

}

function exclaim(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.' || str[i] === '?') {
      newStr += '!';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}



/********************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars,
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}