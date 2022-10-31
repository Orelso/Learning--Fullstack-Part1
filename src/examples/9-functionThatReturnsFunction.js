//* We want the clicking of the button to reset the state stored in the value variable.

//* In order to make the button react to a click event, we have to add an event handler to it.

//* Event handlers must always be a function or a reference to a function. The button will not work if the event handler is set to a variable of any other type.


import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
}

export default App