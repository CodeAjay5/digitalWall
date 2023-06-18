import { MdDeleteForever } from 'react-icons/md';
import './style.css'

const Board = ({ id, text, date, handleDeleteNote }) => {
    return <div className="Board">
        <span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
                
			</div>
    </div>
}

export default Board;