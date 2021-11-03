import React, { useState } from 'react'

function CommentBox() {
    const [comment, setComment] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setComment("")
    }

    const handleChange = (event) => {
        console.log("event.target.value: ", event.target.value)
        setComment(event.target.value)
    }
    return (
        <form className="comment-box" onSubmit={handleSubmit}>
            <textarea onChange={handleChange} type="textarea" value={comment}/>
            <button value="submit">Submit</button>
        </form>
    )
}

export default CommentBox
