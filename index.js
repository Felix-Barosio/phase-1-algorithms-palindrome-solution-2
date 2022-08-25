function isPalindrome(word) {
  // Write your algorithm here
  if(word.length <= 1){
    return true;
  }else if(word[0] == word[word.length - 1]){
    return isPalindrome(word[1, word.length - 1])
  }
  return false;
}

/* 
  Add your pseudocode here
  Add your pseudocode here
  add and check size of the string
  if 1st and last character are same
  remove elements
*/

/*
  Add written explanation of your solution here
  Add written explanation of your solution here
  line 3 and 5 are same condition when we have string same length
  less than or equal to 
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
