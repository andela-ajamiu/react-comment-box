import React from 'react';
import ReactDOM from 'react-dom';


class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {showComments: false,
                  commentList: [
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
                  ]
                 };
  };

  _getComments() {
    return(
      this.state.commentList.map((comment) => 
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

  _addComment(comment) {
    comment.id = this.state.commentList.length + 1;
    this.setState({commentList: this.state.commentList.concat(comment)});
  };

  render() {
    const comments = this._getComments();

    let commentNodes;

    if (this.state.showComments == true) {
      commentNodes = <div className="comment-list">{comments}</div>;
    };

    return(
      <div className="comment-box">
        <CommentForm handleCreate={this._addComment.bind(this)} />
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


class CommentForm extends React.Component {
  _submitComment() {
    let comment = {
      author: this.refs.author.value,
      body: this.refs.body.value
    };

    this.props.handleCreate(comment);

    this.refs.author.value = "";
    this.refs.body.value = "";
  };

  render() {
    return(
      <form>
        <input type="text" placeholder="Author" ref="author" />
        <input type="text" placeholder="Body" ref="body" />
        <button onClick={this._submitComment.bind(this)}>Add Comment</button>
      </form>
    );
  };
};


class Comment extends React.Component {
  constructor() {
    super();
    this.state = {isAbusive: false};
  };

  _toggleAbusive() {
    this.setState({isAbusive: !this.state.isAbusive});
  };

  render() {
    let commentNode;

    if (this.state.isAbusive == false) {
      commentNode = this.props.body;
    } else {
      commentNode = "This comment is marked as ABUSIVE";
    };

    return(
      <div className="comment">
        <img src={this.props.avatar} alt={`${this.props.author}'s picture`} />
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">{commentNode}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete">DELETE COMMENT</a>
          <br/>
          <a href="#" className="comment-footer-report" onClick={this._toggleAbusive.bind(this)}>REPORT AS ABUSE</a>
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