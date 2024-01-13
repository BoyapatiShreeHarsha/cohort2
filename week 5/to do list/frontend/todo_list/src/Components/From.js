import React, { useRef } from 'react'
import "../style/From.css"

export default function From() {
    const title = useRef(null);
    const description = useRef(null);

    async function handleSubmit(e){
        e.preventDefault();
        let body={
            title:title.current.value,
            description:description.current.value
        }
        body = JSON.stringify(body);

        let result = await fetch('http://localhost:5000/notes/addnote', {
            method: "POST",
            headers: {
              Accept: 'application.json',
              'Content-Type': 'application/json'
            },
            body: body
          });

        result = await result.json();

        

        if(!result.success){
            alert(result.message)
        }
        title.current.value="";
        description.current.value="";

    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <div>
        <label htmlFor="title">Title: </label>
        <input type='text' id='title' ref={title}></input>
        </div>
        <div>
        <label htmlFor="description">Description: </label>
        <input type='text' id='description' ref={description}></input>
        </div>
        <button type='submit'>Submit</button>

    </form>
  )
}
