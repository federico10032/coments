import React from 'react'

import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default class CommentBox extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div class='commentBox'> 
        <CommentForm onSubmit={ this.props.onSubmit }/>
        <CommentList data={ this.props.data }/>
      </div>
    )
  }

}