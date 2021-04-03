import { render } from '@testing-library/react'
import React, { Component } from 'react'

// Smart componenets handle functionality and hold values.
// Create subclass of component class and use parent function render() as we did before.
// As it is a class, any functions / variables within it start with this.var

class App extends Component {

  state = {
    count: 0
  }


  // Event listeners "onClick, onChange, etc. have an event parameter."
  handleBtnClick = event => {
    // Event object holds JSON object of the event taken place, including specific HTML elements on the page.
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    console.log(event.target.innerHTML)

    //Instead of this.state.count += 1
    // Use setState method in Component parent class to chance variables in state object.
    if (event.target.value == '+') {
      this.setState({ count: this.state.count + 1 })
    } else {
      this.setState({ count: this.state.count - 1})
    }
    
  }

  render () {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleBtnClick} value={'+'}>+1</button>
        <button onClick={this.handleBtnClick} value={'-'}>-1</button>
      </>
    )
  }
}

// const App = () => {
//   return (
//     <>
//       <h1>Hello World!</h1>
//       <button>Click ME!</button>
//     </>
//   )
// }

export default App
