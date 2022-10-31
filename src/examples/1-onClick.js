import { useState } from 'react'

//* useState puts the counter at (0) 
//* onClick uses setCounter to add 1 to the counter everytime the button is clicked.
//* onClick uses setCounter to turn the counter back to (0)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button  onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
  )
}

export default App