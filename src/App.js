import React, { useState } from 'react'
// REACT HOOKS: Allows dev to hook amrt component features into a dummy component without importing a giant class.

const App = () => {
  // useState is a hook that replaces state = { } in smart components.
  const [countState, setCountState] = useState({
    count: 0
  })

  const handleBtnClick = () => {
    setCountState({ count: countState.count + 1 })
  }

  return (
    <>
      <h1>Count: {countState.count}</h1>
      {/* Because we no longer are using classes, no need for the this. in front of functions or variables. */}
      <button onClick={handleBtnClick}>Click ME!</button>
    </>
  )
}

export default App
