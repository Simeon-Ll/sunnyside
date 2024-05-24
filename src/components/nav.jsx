import React from 'react'
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-hamburger.svg'
function nav() {
    const [popUp, setPopUp] = React.useState(false)
    function togglePopUp(){
        setPopUp(prev => !prev)
    }
  return (
    <nav>
        <img src={logo} alt=""  className='logo'/>
        <ul className='link-list'>
            <li><a href="##" className='nav-links'>About</a></li>
            <li><a href="##" className='nav-links'>Services</a></li>
            <li><a href="##" className='nav-links'>Projects</a></li>
            <li><a href="##" className='nav-button'>Contact</a></li>
        </ul>
        <img src={menu} alt="" className='menu' onClick={togglePopUp}/>

        {popUp && <div style={{
            position:'absolute',
            width:'100%',
            top:'80px',
            display:'flex',
            justifyContent:'center',
            left:'0px'
        }}>
            <div className='pop-up'>
            <ul>
                <li><a href="##">About</a></li>
                <li><a href="##">Services</a></li>
                <li><a href="##">Projects</a></li>
                <li className='popup-button'><a href="##" >Contact</a></li>
            </ul>
            </div>
        </div>}
    </nav>
  )
}

export default nav
