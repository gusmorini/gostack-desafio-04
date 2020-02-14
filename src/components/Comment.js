import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment">

      <div>
        <img src={comment.author.avatar} alt="avatar" />
      </div>

      <p><strong>{comment.author.name}</strong> {comment.content}</p>

    </div>
  );
}

export default Comment;
