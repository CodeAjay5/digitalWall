import Board from './board';
import AddBoard from './addboard.js';
import './style.css'

const BoardList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Board
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddBoard handleAddNote={handleAddNote} />
		</div>
	);
};

export default BoardList;