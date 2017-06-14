import React, { Component } from 'react'

class Comments extends Component {
  constructor(props) {
    super(props)

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
    const state = {...this.state}
    const comment = {
      time: new Date(),
      text: this.state.comment
    }
    state.comments.push(comment)
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
        <button className="button" onClick={this.addComment}>Submit comment</button>
      </div>
    )
  }
}

export default Comments