/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function checkSet(map1,map2){
  if(map1.size!=map2.size)
  return false;

//   console.log(map1);
//   console.log(map2);

for(let [key,value] of map1)
{
    console.log(key,value);
      if(!map2.has(key))
      return false;

    //   console.log(map2.has(key),map2.get(key));

      let v=map2.get(key);
      if(v!=value)
      return false;
}

 
  
  return true;
}

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();

  const map1=new Map();
   const map2=new Map();

  for(let i=0;i<str1.length;i++)
  {
    
    if(map1.has(str1[i]))
    {
        let v=map1.get(str1[i]);
        map1.set(str1[i],v+1);
    }
    else
    map1.set(str1[i],1);
  }

    for(let i=0;i<str2.length;i++)
  {
    if(map2.has(str2[i]))
    {
        let v=map2.get(str2[i]);
        map2.set(str2[i],v+1);
    }
    else
    map2.set(str2[i],1);
  }



  

  return checkSet(map1,map2);

}

module.exports = isAnagram;
