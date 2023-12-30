import React from 'react'

export default function TodoItems({ todo }) {
  return (
    <div className="card todochild" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.description}</p>
        <a href="/" className="btn btn-primary">Delete</a>
      </div>
    </div>
  )
}
