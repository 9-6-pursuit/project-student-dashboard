import React from "react"
const Form = () => {
    return(
        <fieldset>
            <div>
                <h2>1-on-1 Notes</h2>
                <form>
                    <label>
                        Commenter Name 
                         <input type ="text" name="commenter"></input>
                    </label>
                    <br/>
                    <label>
                        Comments
                        <input type="text" name="commenttext"></input>
                    </label>
                    <br/>
                    <button type="submit">Add Note</button>
                </form>




            </div>
        </fieldset>
    )

}

export default Form;