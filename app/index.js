import React from 'react';
import ReactDOM from 'react-dom';


class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {showComments: false};
  };

  _getComments() {
    const commentList = [
      {id: 1, author: "Ben Rub", body: "just wanna comment and hope it shows...", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" },
      {id: 2, author: "Bill Gates", body: "and just another comment in no time", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" },
      {id: 3, author: "Ben Rub", body: "just wanna comment and hope it shows...", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" },
      {id: 4, author: "Bill Gates", body: "and just another comment in no time", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" },
      {id: 5, author: "Ben Rub", body: "just wanna comment and hope it shows...", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" },
      {id: 6, author: "Bill Gates", body: "and just another comment in no time", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" },
      {id: 7, author: "Ben Rub", body: "just wanna comment and hope it shows...", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" },
      {id: 8, author: "Bill Gates", body: "and just another comment in no time", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" },
      {id: 9, author: "Ben Rub", body: "just wanna comment and hope it shows...", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" },
      {id: 10, author: "Bill Gates", body: "and just another comment in no time", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" },
      {id: 11, author: "Ben Rub", body: "just wanna comment and hope it shows...", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" },
      {id: 12, author: "Bill Gates", body: "and just another comment in no time", avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg" }
    ];

    return(
      commentList.map((comment) => 
        <Comment key={comment.id} author={comment.author} body={comment.body} avatar={comment.avatarUrl} />
    ));
  };

  _getCommentsTitle(commentCount) {
    if (commentCount < 0) {
      return "No Comment Yet";
    } else if (commentCount == 1) {
      return "1 Comment";
    } else {
      return `${commentCount} Comments`;
    };
  };

  _getPopularPost(commentCount) {
    const POPULAR_COUNT = 10;

    if (commentCount > POPULAR_COUNT) {
      return(
        <h1>
          This post is getting really popular, don't miss out!
        </h1>
      );
    };
  };

  _toggleCommentsDisplay() {
    this.setState({showComments: !this.state.showComments});
  };

  _getButtonText() {
    if (this.state.showComments == false) {
      return "SHOW COMMENTS";
    } else {
      return "HIDE COMMENTS";
    };
  };

  render() {
    const comments = this._getComments();

    let commentNodes;

    if (this.state.showComments == true) {
      commentNodes = <div className="comment-list">{comments}</div>;
    };

    return(
      <div className="comment-box">
        {this._getPopularPost(comments.length)}
        <h3>Comments</h3>
        <button onClick={this._toggleCommentsDisplay.bind(this)}>{this._getButtonText()}</button>
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        <br/><br/>
        {commentNodes}
      </div>
    );
  };
};


class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <img src={this.props.avatar} alt={`${this.props.author}'s picture`} />
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">{this.props.body}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete">
            Delete Comment
          </a>
        </div>
        <br/><br/>
      </div>
    );
  };
};


ReactDOM.render(
    <CommentBox/>,
    document.getElementById('the-place')
);