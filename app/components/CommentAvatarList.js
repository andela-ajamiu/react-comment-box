import React from 'react-dom';

class CommentAvatarList extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { avatars = [] } = this.props;

    return (
      <div className="comment-avatars">
        <h4>Authors</h4>
        <ul>
          {avatars.map((avatarUrl, i) => (
            <li key={i}>
              <img src={avatarUrl} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default CommentAvatarList;