import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import requireAuth from './requireAuth';

class CommentBox extends React.Component {
  state = { comment: '' };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };
  handleFetch=(event)=>{
      this.props.fetchComments();
      this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.handleFetch}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(requireAuth(CommentBox));