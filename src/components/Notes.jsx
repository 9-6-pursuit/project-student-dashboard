function Notes() {
    return (
        <div className="row">
            <h5 className="border-top border-success py-2">1-on-1 Notes</h5>
            <form action="">
                <label htmlFor="name" className="col-5">Commenter Name</label>
                <input type="text" />
                <label htmlFor="comment" className="col-5">Comment</label>
                <input type="text" />
                <button className="btn btn-success ms-2">Add Note</button>
            </form>
        </div>
    )
}

export default Notes;