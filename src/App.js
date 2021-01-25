import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import Comment from './components/Comment';

let timer;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      welcome: { title: 'Welcome', desc: 'Hello, React!!!' },
      subject: {
        title: 'WEB',
        sub: 'world wide web',
      },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for...' },
        { id: 2, title: 'CSS', desc: 'CSS is for...' },
        { id: 3, title: 'Javascript', desc: 'JS is for...' },
      ],
      comments: [
        { id: 1, name: 'Limu', content: 'How are you?' },
        { id: 2, name: 'Lisa', content: 'Show me what you got' },
        { id: 3, name: 'Jenny', content: 'Greeting' },
      ],
    };
  }

  componentDidMount() {
    let comments = this.state.comments;
    timer = setInterval(() => {
      if (comments.length > 0) {
        comments.pop();
        this.setState({
          comments: comments,
        });
      } else if (timer) {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    let _title = null;
    let _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      for (let i = 0; i < this.state.contents.length; i++) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }
    const { comments } = this.state;
    return (
      <div className='App'>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({ mode: 'welcome' });
          }}
        ></Subject>
        <TOC
          onChangePage={(id) => {
            this.setState({ mode: 'read', selected_content_id: +id });
          }}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
        {comments.map((comment, index) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              content={comment.content}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
