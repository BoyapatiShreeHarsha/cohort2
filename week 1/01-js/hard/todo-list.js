/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.list=[];
  }
  add(str){
    this.list.push(str);
  }
  remove(index){
    let arr=[];
    let n=this.list.length;
    for(let i=0;i<n;i++)
    {
      if(i!=index)
      {
        arr.push(this.list[i]);
      }
    }

    this.list=arr;
  }
  update(index,str){
    if(index<this.list.length)
    this.list[index]=str;
  }
  getAll(){
    return this.list;
  }
  get(index){
    if(index<this.list.length)
    return this.list[index];
    else
    return null;
  }
  clear(){
    this.list=[];
  }
}

module.exports = Todo;
