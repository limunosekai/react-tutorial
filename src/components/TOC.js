import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps) {
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    let lists = [];
    const data = this.props.data;
    for (let i = 0; i < data.length; i++) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={'/content/' + data[i].id}
            data-id={data[i].id}
            onClick={(event) => {
              event.preventDefault();
              this.props.onChangePage(event.target.dataset.id);
            }}
          >
            {data[i].title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
