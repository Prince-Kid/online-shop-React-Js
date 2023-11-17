import React from 'react'
import baner1 from "../../images/banner-1.png"
import baner2 from "./banner-2.png"
const mystyle ={
    width:"30%",
    height:"340px",
}
const mystyle1 ={
    width:"68%",
    height:"340px",
}
const Announcement = () => {
  return (
    <>
     <section className='announc background'>
        <div className="container d_flex">
            <div className="img" style={mystyle}>
                <img src={baner1} width="100%" height="100%" alt=''/>
            </div>
            <div className="img" style={mystyle1}>
                <img src={baner2} width="100%" height="100%" alt=''/>
            </div>
        </div>
    </section> 
    </>
  )
}

export default Announcement
