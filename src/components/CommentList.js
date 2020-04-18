import React from 'react';

import Comment from './Comment'

const CSSTransitionGroup = require ('react-addons-css-transition-group')

export default class CommentBox extends React.Component {

  constructor() {
    super()
  }

  render() {
    let all_comments = 
      this.props.data.map((comment) => {
        return (
          <Comment author={ comment.author } key={ comment.id }>
            { comment.text }
          </Comment>
        )
      })
    return (
      <div class='commentList'>
        <CSSTransitionGroup transitionName="comment" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          { all_comments }
        </CSSTransitionGroup>
      </div>
    )
  }

}