import React from 'react'
import './home.css'
import { useLocation, useNavigate } from 'react-router-dom'
import {HiViewBoards} from 'react-icons/hi'
import {TiSocialInstagram} from 'react-icons/ti'
import {BsFillBookmarksFill} from 'react-icons/bs'
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import BoardList from './../board/boardlist.js';
import Search from './../board/search.js';
import wall from './../../assets/wall.png'


const Home = () => {
    const location = useLocation();
    const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'I’ve missed more than 9000 shots in my career I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'To live a fulfilled life, we need to keep creating the `what is next`, of our lives. Without dreams and goals there is no living, only merely existing, and that is not why we are here.',
			date: '21/04/2021',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
    const navigate = useNavigate();
  return (
    <div className='container'>
        <div className='navbar'>
            <span className='username'>Welcome <span style={{fontWeight:"bold"}}>{location.state.id}</span>!</span>
            <div><HiViewBoards className='searchicon icons'/><button className="navibtn">Boards</button></div>
            <div><TiSocialInstagram className='searchicon icons'/><button className='navibtn' onClick={(e) => {
                          e.preventDefault()
                            navigate('/post',{state:{id:location.state.id}})
                        }}><span>Posts</span></button></div>
            <div><BsFillBookmarksFill className='searchicon icons'/><button className='navibtn' onClick={(e) => {
                          e.preventDefault()
                            navigate('/bookmark',{state:{id:location.state.id}})
                        }}><span>Bookmarks</span></button></div>
            <div className='brand' onClick={(e) => {
              e.preventDefault()
              navigate('/')
            }}><img className='icon' src={wall} alt=""/>digitalWall</div>
        </div>
        <div className='content'>
            <Search handleSearchNote={setSearchText} />
				<BoardList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
        </div>
    </div>
  )
}

export default Home
