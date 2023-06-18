import React, { Component } from 'react'
import wall from './../../assets/wall.png'
import './login.css'
import {useNavigate} from 'react-router-dom'

  function Login(){
    const navigate = useNavigate();
    return (
      <div className='startcontainer'>
        <div className='startcontain'>
          <div className="left">
                <img className='logo' src={wall} alt=""/>
                <h1 className="xltitle">digitalWall</h1>
                <h4 className='xidea'>Helps you connect and share your thoughts...</h4>
            </div>
            <div className="right">
                <div className="modal">
                    <h3 className='joinus'>Join Us!</h3>
                      <form>
                        <input className="typename" id="name" type="text" placeholder="Your Name..." required/>
                        <div><button className='joinwall' onClick={(e) => {
                          e.preventDefault()
                          if(document.getElementById("name").value!="")
                            navigate('home',{state:{id:document.getElementById("name").value}})
                        }}><span>join wall</span></button></div>
                        {/* <div className="joinwall"><Link to='/home' className='joinwalllink' ><span>join wall</span></Link></div> */}
                      </form>       
                </div>
            </div>
        </div>
      </div>
    )
  }


export default Login
