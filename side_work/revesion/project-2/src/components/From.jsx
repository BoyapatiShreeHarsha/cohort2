import React, { useState, useCallback } from "react";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

import service from '../assets/Service 24_7-pana 1.svg'

import '../style/From.css'

export default function From() {

    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        console.log({Name,email,text});
    },[Name,email,text]);

    const handleNameChange =useCallback((e)=>{
        setName(e.target.value);
    },[Name]);
    const handleEmailChange = useCallback((e)=>{
        setEmail(e.target.value);
    },[email]);
    const handleTextChange = useCallback((e)=>{
        setText(e.target.value);
    },[text]);



    
  return (
    <div className="from">
      <div className="left">
        <div className="left-buttons">
          <div className="top-part">
            <button>
              <MdOutlineMessage  style={{transform:"scale(2)",marginLeft:"7%"}}/>
              <p>VIA SUPPORT CHART</p>
            </button>
            <button>
              <IoMdCall style={{transform:"scale(2)"}}/>
              <p>VIA CALL</p>
            </button>
          </div>
          <div className="bottom-part">
            <button>
              <MdOutlineMessage style={{transform:"scale(2)",marginLeft:"7%"}}/>
              <p>VIA EMAIL FORM</p>
            </button>
          </div>
        </div>

        <form className="main-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={Name} onChange={handleNameChange}/>
          <label htmlFor="lname">E-Mail:</label>
          <input type="email" id="lname" value={email} onChange={handleEmailChange}/>
          <label htmlFor="texti">Text:</label>
          <textarea id="texti" rows={7} value={text} onChange={handleTextChange}></textarea>
          <div className="submit">
          <input type="submit" value="Submit" />
          </div>
          
        </form>
      </div>
      <div className="right">
        <img src={service} alt="service-img" className="right-img"/>
      </div>
    </div>
  );
}
