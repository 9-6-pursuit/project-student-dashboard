
function Form({student, newComment, comment}) {
    return (
        <div className="row">
            <form onSubmit={newComment} className="col formBox">
                <p>1-on-1 Notes</p>
                <label htmlFor="commenterName">Commenter Name:</label>
                <input type="text" id="commenterName" name="commenterName" required/><br/>
                <label htmlFor="comment">Comment:</label>
                <input type="text" id="comment" name="comment" required /><br/>
                <input type="submit" value="Submit"/>
            </form> 
            <div className="w-100"></div>
            <ul className="col list-group-flush" key={student.id}>
                {comment.map((comment, i) => {
                    return(
                            <li key ={i} className="list-group-item">{comment.commenter} says, "{comment.comment}"</li>
                    )
                })}
            </ul>

        </div>
    );
}

export default Form;
      