import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState("");
	const characterLimit = 200;
	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};
	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText("");
		}
	};

	return (
		<div className="note new">
			<textarea
				cols="10"
				rows="8"
				placeholder="Digite uma nota"
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className="note-details">
				<small>{characterLimit - noteText.length}</small>
				<button className="save" onClick={handleSaveClick}>
					Salvar
				</button>
			</div>
		</div>
	);
};

export default AddNote;
