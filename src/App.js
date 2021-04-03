import React from 'react'

// How to create react elements without JSX
// React.createElement({
//   type: 'h1',
//   content: 'Hello World!'
// })

const App = () => {
  return (
    // Wrapper to send JSX as one element.
    // Classname replaces class attribute.
    <>
      <h1 className='something'>Hello world!</h1>
      <li>Hello world!</li>
      {/* Self closing elements in HTML need a closing tag in JSX */}
      <input type='text' />
      {/* For attribute is replaced with htmlFor. */}
      <label htmlFor='id' />
    </>
  )
}

export default App
