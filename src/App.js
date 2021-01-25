import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import Comment from './components/Comment';

const comments = [
  { name: 'Limu', content: 'How are you?' },
  { name: 'Lisa', content: 'Show me what you got' },
  { name: 'Jenny', content: 'Greeting' },
];

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject title='WEB' sub='world wide web!!'></Subject>
        <TOC></TOC>
        <Content title='HTML' desc='HTML is Hyper...'></Content>
        {comments.map((comment) => {
          return <Comment name={comment.name} content={comment.content} />;
        })}
      </div>
    );
  }
}

export default App;
