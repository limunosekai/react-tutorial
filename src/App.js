import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject';
import Comment from './components/Comment';
import Control from './components/Control';

let timer;

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
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

  getReadContent() {
    for (let i = 0; i < this.state.contents.length; i++) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
    }
  }

  getContent() {
    let _title = null;
    let _desc = null;
    let _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      let _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={(temp_title, temp_desc) => {
            this.max_content_id += 1;
            let _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: temp_title,
              desc: temp_desc,
            });
            this.setState({
              contents: _contents,
              mode: 'read',
              selected_content_id: this.max_content_id,
            });
          }}
        ></CreateContent>
      );
    } else if (this.state.mode === 'update') {
      let _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={(temp_id, temp_title, temp_desc) => {
            let _contents = Array.from(this.state.contents);
            for (let i = 0; i < _contents.length; i++) {
              if (_contents[i].id === temp_id) {
                _contents[i] = {
                  id: temp_id,
                  title: temp_title,
                  desc: temp_desc,
                };
                break;
              }
            }
            this.setState({
              contents: _contents,
              mode: 'read',
            });
          }}
        ></UpdateContent>
      );
    }
    return _article;
  }

  render() {
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
        <Control
          onChangeMode={(_mode) => {
            if (_mode === 'delete') {
              if (window.confirm('delete?')) {
                let _contents = Array.from(this.state.contents);
                for (let i = 0; i < this.state.contents.length; i++) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                }
                this.setState({
                  contents: _contents,
                  mode: 'welcome',
                });
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
          }}
        ></Control>
        {this.getContent()}
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
