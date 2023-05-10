import { useState } from "react"
import "./Notes.css";

export default function Notes(){
    const [notes, setNotes] = useState('')
    const [form, setForm] = useState({
        commentName: '',
        comment: ''
    })

    function handleSubmit(e){
        e.preventDefault()

        if((e.target.commentName.value && e.target.comment.value)){
            resetForm()
            setNotes((pnotes) =>{
                return [
                    ...pnotes,
                    {
                    commentName: e.target.commentName.value,
                    comment: e.target.comment.value
                    }
                ]
            })
        }
        else{
            alert("Fill both Name and Comment")
        }
        
    }

    function handleTextChange(e){
        setForm({
            ...form,
            [e.target.id]:e.target.value,
                })
    }

    function resetForm(){

        setForm({
            commentName: '',
            comment:'',
        })
    }


    return(
        <div className="col">
            <h5>1-on-1 Notes</h5>
            <form className="col mb-3 mt-4" onSubmit={handleSubmit}>
                <div className="border border-dark p-3">
                <div className="">
                    <label htmlFor="commentName">Commenter Name&nbsp;&nbsp;</label>
                    <input type="text" id="commentName"  onChange={handleTextChange} value={form.commentName}></input>
                </div>
                <div>
                    <label htmlFor="comment">Comment&nbsp;&nbsp;</label>
                    <input type="text" id="comment" onChange={handleTextChange} value={form.comment}></input>
                </div>
                <button className="btn btn-success mt-1">Add Note</button>
                </div>
            </form>

            <div className="comments pl-5">
                {notes && notes.map((note)=> {
                    const key = Math.floor(Math.random() * 10000)
                    return <li key={key}>{note.commentName}: {note.comment}</li>
                })}
            </div>

        </div>
    )
}