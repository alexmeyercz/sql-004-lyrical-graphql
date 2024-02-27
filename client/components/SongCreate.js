import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link, hashHistory } from 'react-router'
import query from '../queries/fetchSongs'

const f = '⇒ SongCreate.js (SongCreate):'
class SongCreate extends Component {
  constructor(props) {
    super(props)

    this.state = { title: '' }
  }

  onSubmit(event) {
    event.preventDefault()
    console.log(f, 'this.props →', this.props)

    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query: query }],
      })
      .then(() => {
        hashHistory.push('/')
      })
      .catch(() => {})
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            onChange={(event) => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
          <button type='submit'>
            <i className='material-icons'>button</i>
          </button>
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`

export default graphql(mutation)(SongCreate)
