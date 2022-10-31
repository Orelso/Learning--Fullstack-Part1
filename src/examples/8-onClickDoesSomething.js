//* We want the clicking of the button to reset the state stored in the value variable.

//* In order to make the button react to a click event, we have to add an event handler to it.

//* Event handlers must always be a function or a reference to a function. The button will not work if the event handler is set to a variable of any other type.


import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () => { setValue(0) //! Seems to also work without curly braces. 
  console.log('clicked the button')
  }
  
  const click20 = () => { setValue(20) //! Seems to also work without curly braces. 
  console.log('clicked the button')
  }

  const click100 = () => { setValue(100) //! Seems to also work without curly braces. 
  console.log('clicked the button')
  }

  const addClick = () => setValue( value + 1) //! Seems to also work without curly braces. 
  console.log('clicked the button')
  

  // const increaseByOne = () => setCounter(counter + 1)


  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
      <button onClick={click20}>button</button>
      <button onClick={click100}>button</button>
      <button onClick={addClick}>button</button>

  </div>
  )
}

export default App