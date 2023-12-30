import React from 'react'
import TodoItems from './TodoItems'

export default function Todo({todos}) {
    // console.log(todos);
  return (
    <>
    <div className="container">
        <div className="text-center">Todo's List</div>
        <div  className="container todoparent">
        {
            todos.map(todo=>{
                // console.log(todo);
                return <TodoItems todo={todo}/>
            })
        }
        </div>
    </div>
    </>
  )
}
