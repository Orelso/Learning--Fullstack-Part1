import { useState } from 'react'
//* The application calls the setTimeout function and passes it two parameters: a function to increment the counter state and a timeout of one second.
//* The function passed as the first parameter to the setTimeout function is invoked one second after calling the setTimeout function.
const App = () => {
  const [ counter, setCounter ] = useState(0)

 
  setTimeout(
    () => setCounter(counter+ 1),
    1000
  )

  console.log('rendering...', counter)


  return (
    <div>{counter}</div>
  )
}

export default App