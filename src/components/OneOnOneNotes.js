import React, { useState } from 'react';

const OneOnOneNotes = ({ student }) => {
  const [notes, setNotes] = useState([]);
  const [commenterName, setCommenterName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, { commenterName, comment }]);
    setCommenterName('');
    setComment('');
  };

  return (
    <div className="one-on-one-notes">
      <h3>1-on-1 Notes</h3>
      <form onSubmit={handleSubmit} className="notes-form">
        <div className="form-field">
          <label htmlFor="commenter-name">Commenter Name</label>
          <input
            className="input-field"
            type="text"
            id="commenter-name"
            value={commenterName}
            onChange={(e) => setCommenterName(e.target.value)}
        />
        </div>
        <div className="form-field">
          <label htmlFor="comment">Comment</label>
          <textarea
            className="input-field"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />

        </div>
        <button type="submit" className="add-note-button">Add Note</button>
      </form>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index} className="note-item">
            <strong>{note.commenterName}:</strong> {note.comment}
          </li>
        ))}
      </ul>
    </div>
  );

};

export default OneOnOneNotes;


