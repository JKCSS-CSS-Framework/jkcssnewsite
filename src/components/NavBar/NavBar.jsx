import React from 'react'
import '../../styles/index.css'
import '@jehankandy/jkcss/src/jkcss.css'
import JKCSS from '../../assets/jkcss.png'
import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className='container navbar'>
        <div className="flex justify-between">
            <div className="flex">
                <Link to={'/'}>
                    <img src={JKCSS} alt="" className='logo'/>
                </Link>
                <h1 className="font-semibold">JKCSS</h1>
            </div>
            <div className="">
                <ul>
                    <li>HI akk</li>
                    <li>HI akk</li>
                    <li>HI akk</li>
                </ul>              
            </div>
            <div className="" style={{ paddingTop: '6px' }}>
                <Link to={'https://www.linkedin.com/in/jehan-weerasuriya-23a3a4223/'}><BsLinkedin style={{ height: '30px', width: 'auto', paddingRight: '10px', color: 'white'}} /></Link>
                <Link to={'https://github.com/JKCSS-CSS-Framework'}><BsGithub style={{ height: '30px', width: 'auto', paddingRight: '10px', color: 'white'}} /></Link>
            </div>
        
        </div>
        
    </div>
  )
}

export default NavBar