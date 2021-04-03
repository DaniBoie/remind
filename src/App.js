import React, { useState } from 'react'
// REACT HOOKS: Allows dev to hook amrt component features into a dummy component without importing a giant class.

const App = () => {
  // useState is a hook that replaces state = { } in smart components.
  // If there is more than one variable in countstate they will disappear unless spread operater used in setState.
  const [countState, setCountState] = useState({
    count: 0,
    message: 'hello'
  })

  // Any methods inside of App dealing with state should be created as a method OF state.
  countState.handleBtnClick = event => {
    if (event.target.value === '+') {
      setCountState({ ...countState, count: countState.count + 1 })
    } else {
      setCountState({ ...countState, count: countState.count - 1 })
    }

    if (event.target.value === 'r') {
      setCountState({ ...countState, count: 0 })
    }
  }

  return (
    <>
      <h1>{countState.message}</h1>
      <h1>Count: {countState.count}</h1>
      {/* Because we no longer are using classes, no need for the this. in front of functions or variables. */}
      <button onClick={countState.handleBtnClick} value='+'>+</button>
      <button onClick={countState.handleBtnClick} value='-'>-</button>
      <button onClick={countState.handleBtnClick} value='r'>Reset</button>
    </>
  )
}

export default App
