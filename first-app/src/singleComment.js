import React from 'react';

const SingleComment =(props) => {
    console.log(props);
    return(
        <div className="comment">
        <a href = "/" className="avatar">
            <img src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" alt="profile"></img>
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.name}
            </a>
            <div className="metadata">
                <span className="date">
                    {props.date}
                </span>
            </div>
            <div className="text">
                {props.text}
            </div>
        </div>
    </div>
    )
}

export default SingleComment;