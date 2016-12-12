import React from 'react';
import $ from 'jquery';
import CommentForm from './CommentForm';
import Comment from './Comment';

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {showComments: false,
                  commentList: []
    };
  };

  componentWillMount() {
    this._fetchComments();
  };

  // componentDidMount() {
  //   this._timer = setInterval(
  //   () => this._fetchComments(),
  //   5000);
  // };

  componentWillUnmount() {
    clearInterval(this._timer);
  };

  _getComments() {
    return(
      this.state.commentList.map((comment) => 
        <Comment key={comment.id} id={comment.id} comment={comment} onDelete={this._deleteComment.bind(this)} />
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

  _fetchComments() {
    $.ajax({
      method: 'GET',
      url: '../public/comments.js',
      success: (commentList) => {
        this.setState({commentList: JSON.parse(commentList)});
      }
    });
  };

  _getAvatars() {
    return this.state.commentList.map((comment) => {comment.avatarUrl});
  };

  _deleteComment(commentID) {
    // if (!commentID) {
    //   return;
    // }
    
    const comments = this.state.commentList.filter(
      comment => comment.id !== commentID
    );


    
    this.setState({ commentList: comments });
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
        <CommentForm handleCreate={this._addComment.bind(this)} />
        <h3>Comments</h3>
        <button onClick={this._toggleCommentsDisplay.bind(this)}>{this._getButtonText()}</button>
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        <br/><br/>
        {commentNodes}
      </div>
    );
  };
};

export default CommentBox;