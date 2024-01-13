import React, { useEffect, useState, useRef } from 'react'
import "../style/List.css"
import { MdCancel } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export default function List() {

    const [list, setList] = useState([]);
    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState("");
    const [diaplay, setDiaplay] = useState(null);
    const formRef = useRef(null)

    async function getElements() {
        let result = await fetch("http://localhost:5000/notes/getnotes");
        result = await result.json();

        // console.log(result.messsage);

        if(!result.success){
            alert(result.message);
            return;
        }

        setList(result.messsage);
    }

    async function handleDelete(id) {
        // console.log(id);
        let body = {
            _id: id
        }
        body = JSON.stringify(body);

        let result = await fetch('http://localhost:5000/notes/deletenote', {
            method: "POST",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: body
        });

        result = await result.json();

        //need to add sucess in ans
        // console.log(result);
        if (!result.success) {
            alert(result.message);
        }

        getElements();
    }


    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        getElements();
        return ()=>{
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    const handleClickOutside = (e) => {
        // Check if the click is outside the form
       

        if (formRef.current && !formRef.current.contains(e.target)) {
          setDiaplay(null);
        }
      };

    useEffect(() => {
        if (diaplay) {
            console.log("display clicked");
            setHeading(diaplay.title);
            setDescription(diaplay.description);
            

        }
        
    }, [diaplay]);

    // edit form

    function handleHeadingChange(e) {
        setHeading(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    async function handleupdate(ele) {
        // console.log("handled update");
        setDiaplay(ele);

    }

    async function handleSubmit2(e) {
        e.preventDefault();
        let body = {
            _id: diaplay._id,
            title: heading,
            description: description
        }
        body = JSON.stringify(body);

        let result = await fetch('http://localhost:5000/notes/updatenote', {
            method: "PUT",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: body
        });

        result = await result.json();

        //need to add sucess in ans

        if (!result.success) {
            alert(result.message);
        }

        setDiaplay(null);
        getElements();

    }



    return (
        <div className='body'>
            {diaplay && <div className="body-form" ref={formRef}>
                <div className='cross' onClick={()=>{setDiaplay(null);}}><MdCancel /></div>
                <form className='form' onSubmit={handleSubmit2}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type='text' id='title' value={heading} onChange={handleHeadingChange}></input>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input type='text' id='description' value={description} onChange={handleDescriptionChange}></input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>}
            {
                list.map(ele => {
                    return <div key={ele._id} className="list">
                        <div className="list-text">
                            <div className="title">{ele.title}</div>
                            <div className="description">{ele.description}</div>
                        </div>
                        <div className="list-buttons">
                            <MdEdit onClick={() => { handleupdate(ele) }}/>
                            <MdCancel onClick={() => { handleDelete(ele._id) }}/>
                        </div>
                    </div>
                })
            }
        </div>

    )
}
