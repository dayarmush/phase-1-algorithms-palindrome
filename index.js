function isPalindrome(word) {
  let backWards = []
  let wordArr = word.split('')
  for (let i = 0; i < wordArr.length; i++) {
    backWards.unshift(wordArr[i]);
  }
  const backWardsStr = backWards.toString()
  const wordArrStr = wordArr.toString()
  if (backWardsStr === wordArrStr) {
    return true;
  }
  return false;
}

/* 
  Add your pseudocode here
iterate through word backwards
add to array 
if matches 
return true else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
