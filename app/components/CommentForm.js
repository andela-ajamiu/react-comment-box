import React from 'react';

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {characters: 0};
  };

  _submitComment() {
    if (!this.refs.author.value || !this.refs.body.value) {
      alert('Please enter your name and comment.');
      return;
    }

    let comment = {
      author: this.refs.author.value,
      body: this.refs.body.value,
      avatarUrl: "http://www.avatar-zone.com/Avatars/Fun/Avatar-25.jpg"
    };

    this.props.handleCreate(comment);

    this.refs.author.value = "";
    this.refs.body.value = "";
  };

  _getCommentLength() {
    this.setState({characters: this.refs.body.value.length});
  };

  render() {
    return(
      <form>
        <input type="text" placeholder="Author" ref="author" />
        <textarea type="text" placeholder="Body" ref="body" onChange={this._getCommentLength.bind(this)} />
        <button onClick={this._submitComment.bind(this)}>Add Comment</button>
        <br/>
        <p>{this.state.characters} characters</p>
      </form>
    );
  };
};

export default CommentForm;