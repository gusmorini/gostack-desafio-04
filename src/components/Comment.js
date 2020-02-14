import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment">
      <img src={comment.author.avatar} alt="avatar" />
      <p>
        <strong>{comment.author.name}</strong> {comment.content}
      </p>
    </div>
  );
}

export default Comment;