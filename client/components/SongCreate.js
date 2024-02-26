import React, { Component } from 'react'

const f = '⇒ SongCreate.js (SongCreate):'
class SongCreate extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
  }
  render() {
    return (
      <div>
        <h3>Create a new song</h3>
        <form>
          <label htmlFor='song-title'>Song Title</label>
          <input
            type='text'
            name=''
            id='song-title'
            onChange={(event) => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    )
  }
}
export default SongCreate
