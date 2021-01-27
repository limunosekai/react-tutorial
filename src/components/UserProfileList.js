import React from 'react';
import UserProfile from './UserProfile';

class UserProfileList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: '홍길동',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          job: '변호사',
        },
        {
          id: 2,
          name: '사오정',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          job: '노무사',
        },
        {
          id: 3,
          name: '손오공',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          job: '판사',
        },
        {
          id: 4,
          name: '한석봉',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          job: '의사',
        },
        {
          id: 5,
          name: '정우성',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          job: '깍사',
        },
        {
          id: 6,
          name: '문희준',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          job: '환경미화원',
        },
      ],
    };
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        {users.map((user) => {
          return <UserProfile user={user}></UserProfile>;
        })}
      </div>
    );
  }
}

export default UserProfileList;
