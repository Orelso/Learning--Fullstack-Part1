import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  const multi = () => setCounter(counter * 2)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
      <button onClick={multi}>
        multi
      </button>
    </div>
  )
}

export default App