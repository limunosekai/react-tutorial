import React, { Component } from 'react';
import './css/Comment.css';

class Comment extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called.`);
  }

  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called.`);
  }

  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called.`);
  }

  render() {
    const { name, content } = this.props;
    return (
      <div className='comment'>
        <div className='imageContaioner'>
          <img src='#' alt='x'></img>
        </div>
        <div className='commentContainer'>
          <div className='nameText'>{name}</div>
          <span className='contentText'>{content}</span>
        </div>
      </div>
    );
  }
}

export default Comment;
