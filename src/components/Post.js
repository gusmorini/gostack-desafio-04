import React from 'react';
import propTypes from 'prop-types';

import Comment from './Comment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const iconLike = <FontAwesomeIcon icon={faThumbsUp} />;
const iconComment = <FontAwesomeIcon icon={faComment} />;
const iconShare = <FontAwesomeIcon icon={faShare} />;


function Post({ data, ...rest }) {
  return (
    <div className="post" {...rest} >
      <div className="author">
        <img src={data.author.avatar} alt="avatar" />
        <div className="title">
          <span>{data.author.name}</span>
          <small>{data.date}</small>
        </div>
      </div>
      <p>{data.content}</p>

      <div className='actions'>
        <a href="#">curtir {iconLike}</a>
        <a href="#">comentar {iconComment}</a>
        <a href="#">compartilhar {iconShare} </a>
      </div>

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