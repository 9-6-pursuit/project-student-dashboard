function Notes({handleSubmit, handleInput, inputList}) {
    return (
        <div className="border-top border-success py-3">
        <div className="row border border-dark py-2 px-5">
            <h5 className="py-2">1-on-1 Notes</h5>
            <form action="submit" onSubmit={handleSubmit} onChange={handleInput}>
                <label htmlFor="name" className="col-5">Commenter Name</label>
                <input type="text" />
                <label htmlFor="comment" className="col-5">Comment</label>
                <input type="text" />
                <button className="btn btn-success ">Add Note</button>
                <ul>
                {inputList.map((el,index) => <li key={index}>{el}</li> )}
                </ul>
            </form>
        </div>
        </div>
    )
}

export default Notes;