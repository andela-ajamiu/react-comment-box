import React from 'react';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {isAbusive: false};
  };

  _toggleAbusive() {
    this.setState({isAbusive: !this.state.isAbusive});
  };

  _handleDelete() {
    if (confirm("Are you sure?")) {
      this.props.onDelete(this.props.id);
    };
  };

  render() {
    let commentNode;

    if (this.state.isAbusive == false) {
      commentNode = this.props.comment.body;
    } else {
      commentNode = "This comment is marked as ABUSIVE";
    };

    return(
      <div className="comment">
        <img src={this.props.comment.avatarUrl} alt={`${this.props.comment.author}'s picture`} />
        <p className="comment-header">{this.props.comment.author}</p>
        <p className="comment-body">{commentNode}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete" onClick={this._handleDelete.bind(this)}>DELETE COMMENT</a>
          <br/>
          <a href="#" className="comment-footer-report" onClick={this._toggleAbusive.bind(this)}>REPORT AS ABUSE</a>
        </div>
        <br/><br/>
      </div>
    );
  };
};

export default Comment;