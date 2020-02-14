import React from 'react';
import propTypes from 'prop-types';

import Comment from './Comment';

function Post({ data, ...rest }) {
  return (
    <div className="post" {...rest} >
      <img src={data.author.avatar} alt="avatar" />
      <div className="title">
        <span>{data.author.name}</span>
        <small>{data.date}</small>
      </div>
      <p>{data.content}</p>

      {!!data.comments === true && data.comments.map(c => <Comment key={c.id} comment={c} />)}

    </div>
  )

}

Post.propTypes = {
  data: propTypes.shape({
    author: propTypes.shape({
      name: propTypes.string,
      avatar: propTypes.string,
    }),
    date: propTypes.string,
    comments: propTypes.array,
  })
}

export default Post;