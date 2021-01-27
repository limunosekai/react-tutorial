import React, { Component, useState, useEffect } from 'react';
import LoginControl from './components/LoginControl';

function App2() {
  return (
    <div className='container'>
      <h1>Hello World</h1>
      <FuncComp
        initNumber={2}
        date={new Date().toLocaleTimeString()}
      ></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

const funcStyle = 'color:blue';
let funcID = 0;

function FuncComp(props) {
  const numberState = useState(props.initNumber);
  const number = numberState[0];
  const setNumber = numberState[1];

  // const dateState = useState(props.date);
  // const date = dateState[0];
  // const setDate = dateState[1];

  // 구조분해할당 적용
  const [date, setDate] = useState(props.date);

  useEffect(() => {
    console.log('%cfunc => useEffect' + ++funcID, funcStyle);
    document.title = number;
  }, [number]);

  console.log('%cfunc => render' + ++funcID, funcStyle);
  return (
    <div className='container'>
      <h2>Function Style Component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input
        type='button'
        value='random'
        onClick={() => setNumber(Math.random())}
      ></input>
      <input
        type='button'
        value='date'
        onClick={() => setDate(new Date().toLocaleTimeString())}
      ></input>
    </div>
  );
}

class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toLocaleTimeString(),
  };
  render() {
    return (
      <div className='container'>
        <h2>Class Style Component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type='button'
          value='random'
          onClick={() => {
            this.setState({
              number: Math.random(),
            });
          }}
        ></input>
        <input
          type='button'
          value='date'
          onClick={() => {
            this.setState({
              date: new Date().toLocaleTimeString(),
            });
          }}
        ></input>
        <LoginControl></LoginControl>
      </div>
    );
  }
}

export default App2;
