//* We want the clicking of the button to reset the state stored in the value variable.

//* In order to make the button react to a click event, we have to add an event handler to it.

//* Event handlers must always be a function or a reference to a function. The button will not work if the event handler is set to a variable of any other type.


import { useState } from 'react'
const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App