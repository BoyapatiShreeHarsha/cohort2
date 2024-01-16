import React from 'react'
import '../styles/Frame.css'
import shoe from '../assets/shoe_image.png'
import amazon from '../assets/amazon.png'
import flipkart from '../assets/flipkart.png'


export default function Frame() {
  return (
    <>
    <div className="frame">
    <div className="left">
        <h1 className="heading">YOUR FEET DESERVERS THE BEST</h1>
        <p className="left-body">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="buttons">
            <button className="shop">Shop Now</button>
            <button className="category">Category</button>
        </div>

        <div className="footer">
            <p>Also available on</p>
            <div className="shop-images">
              <a href="https://www.amazon.in/"><img src={amazon} alt="amazon_img"/></a>
              <a href="https://flipkart.com/"><img src={flipkart} alt="flipkart"/></a>
            </div>
        </div>
    </div>
    <div className="right">
      <img src={shoe} alt="shoe_img"/>
    </div>
    </div>
    </>
  )
}
