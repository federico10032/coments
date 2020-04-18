import React from 'react'

export default class CommentForm extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} class='commentForm'>
        <input type="text" class="form-control" name="author" placeholder="Nombre"/>
        <input type="text" class="form-control" name="text" placeholder="Comentario"/>
        <input type="submit" class="form-control" value="Firma!"/>
        <input type="hidden" name="id" value={Date.now()}/>
      </form>
    )
  }

}