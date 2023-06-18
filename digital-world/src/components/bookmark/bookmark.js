import React from 'react'
import './../home/home.js'
import { useLocation, useNavigate } from 'react-router-dom'
import {HiViewBoards} from 'react-icons/hi'
import {TiSocialInstagram} from 'react-icons/ti'
import {BsFillBookmarksFill} from 'react-icons/bs'
import wall from './../../assets/wall.png'
import bk from './../../assets/error.jpg'

const Bookmark = () => {
    const navigate = useNavigate()
    const location = useLocation();
  return (
    <div className='container'>
        <div className='navbar'>
            <span className='username'>Welcome <span style={{fontWeight:"bold"}}>{location.state.id}</span>!</span>
            <div><HiViewBoards className='searchicon icons'/><button className='navibtn' onClick={(e) => {
                          e.preventDefault()
                            navigate('/home',{state:{id:location.state.id}})
                        }}><span>Board</span></button></div>
            <div><TiSocialInstagram className='searchicon icons'/><button className='navibtn' onClick={(e) => {
                          e.preventDefault()
                            navigate('/post',{state:{id:location.state.id}})
                        }}><span>Posts</span></button></div>
            <div><BsFillBookmarksFill className='searchicon icons'/><button className="navibtn">Bookmarks</button></div>
            <div className='brand' onClick={(e) => {
              e.preventDefault()
              navigate('/')
            }}><img className='icon' src={wall} alt=""/>digitalWall</div>
        </div>
        <div>
          <img className='bg' src ={bk} />
        </div>
    </div>
  )
}

export default Bookmark
