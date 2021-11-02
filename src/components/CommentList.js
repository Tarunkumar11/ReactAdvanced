import React from 'react'

function CommentList() {

    const Comment = ({ text }) => {
        return (
            <div className="coment">
                <p>{text}</p>
            </div>
        )
    }
    return (
        <div className="comment-list">
            <Comment text="Hey tarun this is comment"/>
            <Comment text="Hey tarun this is comment"/>
            <Comment text="Hey tarun this is comment"/>
        </div>
    )
}

export default CommentList
