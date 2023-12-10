/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result=0;
  }
  calculate(str){
    str=str.trim();

    let ans=eval(str);
    // console.log(ans,);
    ans=parseFloat(ans);
    // console.log(ans);
    if(ans==NaN  || ans==Infinity)
      throw new Error("Not a number");
    this.result=ans;


    // let arr=[];
    
    // let word="";
    // for(let i=0;i<str.length;i++)
    // {
      
    //   while(i<str.length && str[i]!='(' && str[i]!=')' && str[i]!=' ' && str[i]!='+' && str[i]!='-' && str[i]!='*' && str[i]!='/')
    //   {
    //     word+=str[i];
    //     i++;
    //   }
    //   if(word!='')
    //   {
    //     arr.push(word);
    //     word="";
    //   }
    //   if(str[i]=='(' || str[i]==')' || str[i]=='+' || str[i]=='-' || str[i]=='*' || str[i]=='/')
    //   {
    //     arr.push(str[i]);
    //   }
      
    // }
    // if(word!='')
    //   {
    //     arr.push(word);
    //     word="";
    //   }

    // console.log(arr);

    // this.result=this.findit(arr,0);




  }

  // findit(arr,i){
  //   let ans=0;
  //   let prev=" ";
  //   for(;i<arr.length;i++)
  //   {
  //     switch (arr[i]) {
  //       case '+':
  //         prev="+";
  //         break;
  //       case '-':
  //           prev="-";
  //           break;
  //       case '*':
  //             prev="*";
  //             break;
  //       case '/':
  //               prev="/";
  //               break;
  //       case '(':
  //         let nextans=this.findit(arr,i+1);
  //         if(prev=="+")
  //         {
  //           ans+=nextans;
  //         }
  //         else if(prev=="-")
  //         {
  //           ans-=nextans;
  //         }
  //         else if(prev=='*')
  //         {
  //           ans*=nextans;
  //         }
  //         else if(prev=='/')
  //         {
  //           if(nextans==0)
  //           {
  //             throw new Error("Not possible");
              
  //           }
  //           ans=ans/nextans;
  //         }
  //         else 
  //         ans=nextans;
  //       case ')':
  //         i++;
  //         return ans;
  //       default:
  //         let a=parseFloat(arr[i]);
  //         if(a==NaN)
  //         throw new Error("Not a number");
  //          let newans=a;
  //         if(prev=="+")
  //         {
  //           ans+=newans;
  //           prev=" ";
  //         }
  //         else if(prev=="-")
  //         {
  //           ans-=newans;
  //           prev=" ";
  //         }
  //         else if(prev=='*')
  //         {
  //           ans*=newans;
  //           prev=" ";
  //         }
  //         else if(prev=='/')
  //         {
  //           if(newans==0)
  //           {
  //             throw new Error("Not possible");
              
  //           }
  //           ans=ans/newans;
  //           prev=" ";
  //         }
  //         else 
  //         {
  //           ans=newans;
  //           prev=" ";
  //         }
  //     }

  //   }

  //   return ans;
  // }


  add(value){
    this.result+=value;
  }
  subtract(value){
    this.result-=value;
  }
  multiply(value){
    this.result*=value;
  }
  divide(value){
    if(value!=0)
    this.result/=value;
    else
    {
      throw new Error("Not possible");
    }
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
}

module.exports = Calculator;
