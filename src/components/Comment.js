import React, { Component } from 'react';
import './css/Comment.css';

class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <div className='imageContaioner'>
          <img src='#' alt='x'></img>
        </div>
        <div className='commentContainer'>
          <div className='nameText'>{this.props.name}</div>
          <span className='contentText'>{this.props.content}</span>
        </div>
      </div>
    );
  }
}

export default Comment;
