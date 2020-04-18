import React from 'react'
import { Link } from 'react-router'

const logo = require('../images/cf.png')

const fullScreen = {
  padding: '10em',
  margin: 0,
  height: '100%'
}

export default class Sign extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div style={fullScreen} class='home'> 
        <img class='center-block' src={ logo } alt="App Logo"/>
        <h1 class='text-center'>React Facilito, Pasa y firma</h1>
        <Link to='sign'>
          <button class='btn btn-default btn-lg center-block'>
            FIRMA AHORA :D
          </button>
        </Link>
      </div>
    )
  }

}