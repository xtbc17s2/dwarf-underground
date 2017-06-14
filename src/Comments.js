import React, { Component } from 'react'

class Comments extends Component {
  constructor() {
    super()

    this.state = {
      comment: '',
      comments: []
    }

    this.updateComment = this.updateComment.bind(this)
    this.addComment = this.addComment.bind(this)
  }

  updateComment(ev) {
    this.setState({
      comment: ev.target.value
    })
  }

  addComment(ev) {
    const comment = {
      timestamp: new Date(),
      text: this.state.comment
    }
    const state = {...this.state}
    state.comments.push(comment)
    state.comment = ''
    this.setState(state, () => console.log(this.state))
  }

  render() {
    return (
      <div className="comments">
        <textarea
          value={this.state.comment}
          onChange={this.updateComment}
          placeholder="Enter comment here">
        </textarea>
        <button onClick={this.addComment} className="button">Submit comment</button>
      </div>
    )
  }
}

export default Comments