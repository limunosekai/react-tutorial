import React from 'react';

class AttendanceBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { id: 1, name: 'Mike' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Lisa' },
        { id: 4, name: 'Lose' },
        { id: 5, name: 'Jenny' },
        { id: 6, name: 'Leo' },
        { id: 7, name: 'Sam' },
        { id: 8, name: 'Kate' },
        { id: 9, name: 'Susan' },
      ],
    };
  }

  render() {
    let { students } = this.state;

    return (
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    );
  }
}

export default AttendanceBook;
