import React from 'react'
import './App.css'

// How to create react elements without JSX
// React.createElement({
//   type: 'h1',
//   content: 'Hello World!'
// })

const num = 5

// Global styling objects to use in components
const styles = {
  heading: {
    color: 'red'
  }
}

const App = () => {
  return (
    // Wrapper to send JSX as one element.
    // Classname replaces class attribute.
    <>
      <h1 className='something'>Hello world!</h1>

      {/* To input variables into JSX use { var } syntax, any javascript code works */}
      <li>{num * 18}</li>

      {/* To add styles, use dot notation to look into styles dict and find specific styles dict. */}
      {/* A more organized method for longer pages is to create a css page, import and use it here. Ex. id */}
      <h2 style={styles.heading} id='heading'>Hello Friends!</h2>

      {/* Self closing elements in HTML need a closing tag in JSX */}
      <input type='text' />

      {/* For attribute is replaced with htmlFor. */}
      <label htmlFor='id' />
    </>
  )
}

export default App