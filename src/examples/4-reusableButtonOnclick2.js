import { useState } from 'react' 

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
//* { ...clicks } creates a new object that has copies of all of the properties of the clicks object.
//* { ...clicks, right: clicks.right + 1 } creates a copy of the clicks object where the value of the right property is increased by one.
const handleLeftClick = () =>
setClicks({ ...clicks, left: clicks.left + 1 })

const handleRightClick = () =>
setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App