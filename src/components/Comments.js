import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import "./Comments.css"



const Comments = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleAddComment = () => {
        if (name.trim() !== '' && comment.trim() !== '') {
            const newComment = `${name} says, "${comment}"`;
            setCommentsList([...commentsList, newComment]);
            setName('');
            setComment('');
        }
    };
    return (
        <div className='comment-section'>
            <h5>1-on-1 Notes</h5>
            <input type="text" className='input' value={name} onChange={handleNameChange} placeholder="Your Name" />
            <input type="text" className='input' value={comment} onChange={handleCommentChange} placeholder="Your Comment" />
            <Button variant="success" onClick={handleAddComment}>Add Comment</Button>

            <div>
                {commentsList.map((comment, index) => (
                    <li className='square' key={index}>{comment}</li>
                ))}
            </div>
        </div>
    );










};


export default Comments;