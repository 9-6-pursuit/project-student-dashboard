import { useState } from 'react';


const Comments = () => {

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  const handleAddComment = () => {
    setComments([...comments, { text: newComment, name: name }]);
    setNewComment('');
    setName('');
  }

  return (
    <div className='comments'>

      <input 
        placeholder="Your Name"
        value={name} 
        onChange={event => setName(event.target.value)} 
      />
      <input 
        placeholder="Your Comment"
        value={newComment} 
        onChange={event => setNewComment(event.target.value)} 
      />
      <button onClick={handleAddComment}>Add Comment</button>
      {comments.map((comment, index) => (
        <div key={index}>
        </div>
      ))}
    </div>
  );
};


export default Comments;