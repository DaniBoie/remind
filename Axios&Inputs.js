import { render } from '@testing-library/react'
import React, { Component } from 'react'
import axios from 'axios'

class App extends Component{
  // State now holds empty string for input values on page.
  state = {
    item: '',
    items: []
  }

  // As long as the name in state and the name of the input match, this function will always have the value of the input saved into state.
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddItem = event => {
    event.preventDefault()

    // Not doing anything on the site, just an example of how you would do API calls within REACT. NPM PACKAGE!
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${this.state.item}`)
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err))

    // Cannot directly call and modify an item in state. Ex. this.state.items.push(items) IS NOT VALID! must use setState.
    // Because of this, we clone the array before making modifications, then change the array in state completely.
    let items = [...this.state.items]
    items.push(this.state.item)
    this.setState({ items })
  }

  render () {
    return (
      <>
        <form>
          <label htmlFor="item">item</label>
          {/* To get text from an input make sure its name is in the state, also add onChange to handle the changing of an input. */}
          <input
            type="text"
            name='item'
            value={this.state.item}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddItem}>Add Item!</button>
        </form>
        {/* Creating an array on the return to update and list the items in the items array to the page. */}
        <ul>
          {
            this.state.items.map(item => <li>{item}</li>)
          }
        </ul>
      </>
    )
  }
}

export default App