import { useState } from 'react'


//* When the application starts, the code in App is executed. This code uses a useState hook to create the application state, setting an initial value of the variable counter. This component contains 
// the Display component - which displays the counter's value, 0 - and three Button components. The buttons all have event handlers, which are used to change the state of the counter.

//* When one of the buttons is clicked, the event handler is executed. The event handler changes the state of the App component with the setCounter function. Calling a function which changes the state 
// causes the component to rerender.

//* So, if a user clicks the plus button, the button's event handler changes the value of counter to 1, and the App component is rerendered. This causes its subcomponents Display and Button to also be 
// re-rendered. Display receives the new value of the counter, 1, as props. The Button components receive event handlers which can be used to change the state of the counter.


const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

//* can be replaced by 
//! const Display = ({counter}) => <div>{counter}</div>
 


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

//* can be replaced by 
//! const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  const multiplyByTwo = () => setCounter(counter * 2)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />           
      <Button
        onClick={multiplyByTwo}
        text='multiply by 2'
      />    
    </div>
  )
}

export default App