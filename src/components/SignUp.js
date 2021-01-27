import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: 1,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    let { name, gender } = this.state;

    return (
      <form onSubmit={this.handleSumbit}>
        <label>
          Name
          <input
            type='text'
            name={'name'}
            value={name}
            onChange={this.handleChange}
          ></input>
        </label>
        <br></br>
        <label>
          Gender
          <select name={'gender'} value={gender} onChange={this.handleChange}>
            <option value={1}>Man</option>
            <option value={2}>Women</option>
          </select>
        </label>
        <input type='submit' value='Submit'></input>
      </form>
    );
  }
}

export default SignUp;
