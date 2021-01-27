import React from 'react';

function FancyBorder(props) {
  return (
    <div
      style={Object.assign(props.style, {
        display: 'inline-block',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#80d900',
        borderRadius: 16,
        textAlign: 'center',
      })}
    >
      <div
        style={{
          padding: 8,
          background: '#80d900',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      >
        <span style={{ fontSize: 16 }}>{props.title}</span>
      </div>
      <div style={{ marginTop: 8 }}>{props.children}</div>
    </div>
  );
}

const styles = {
  imageContainer: {
    width: 50,
    margin: 'auto',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  jobContainer: {
    padding: 8,
  },
  jobText: {
    fontSize: 16,
  },
};

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <FancyBorder
        title={user.name}
        style={{ width: 'calc(33.3% - 12px)', margin: 4 }}
      >
        <div style={styles.imageContainer}>
          <img alt='profile' src={user.image} style={styles.image}></img>
        </div>
        <div style={styles.jobContainer}>
          <span style={styles.jobText}>{user.job}</span>
        </div>
      </FancyBorder>
    );
  }
}

export default UserProfile;
