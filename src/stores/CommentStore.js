import Reflux from 'reflux'
import io from 'socket.io-client'

import CommentActions from '../actions/CommentActions'

let CommentStore = Reflux.createStore({
  listenables: [CommentActions],
  init: function() {
    this.socket = io('http://localhost:3000');
    this.socket.on('data', (data) => {
      console.log(data)
      this.trigger(data)
    })
  },
  fetchComments: function () {
    this.socket.emit('read')
    
  },
  updateComments: function(comment) {
    this.socket.emit('sign', comment)
  }
})

export default CommentStore