/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let set1 = new Set();
    set1.add('a');
    set1.add('e');
    set1.add('i');
    set1.add('o');
    set1.add('u');

    set1.add('A');
    set1.add('E');
    set1.add('I');
    set1.add('O');
    set1.add('U');

    let ans=0;
    for(let i=0;i<str.length;i++)
    {
      if(set1.has(str[i]))
      ans++;
    }

    return ans;
}

module.exports = countVowels;