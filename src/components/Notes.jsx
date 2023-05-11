function Notes({newComment, comment}) {
    return (
        <div className="border-top border-success py-3">
        <div className="row border border-dark py-2 px-5">
            <h5 className="py-2">1-on-1 Notes</h5>
            <form action="submit" onSubmit={newComment} >
                <label htmlFor="name" className="col-5">Commenter Name</label>
                <input type="text" id="name" name="name"/>
                <label htmlFor="comment" className="col-5">Comment</label>
                <input type="text" id="comment" name="comment" />
                <button className="btn btn-success ">Add Note</button>
                <ul>
                {comment.map((el,index) => <li key={index}>{el.commenter} says,"{el.comment}"</li> )}
                </ul>
            </form>
        </div>
        </div>
    )
}

export default Notes;