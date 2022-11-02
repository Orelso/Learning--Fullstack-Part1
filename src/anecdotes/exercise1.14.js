import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  let anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])


  const anecdoteClick = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  const voteClick = (selected) => {

    const newVal = points[selected] + 1
    let newPoints = [...points]
    newPoints.splice(selected, 1, newVal)
    setPoints(newPoints)
  }

  let newPoints = [...points]
  const mostPoints =  Math.max(...points)
  const mostPointsId = newPoints.indexOf(mostPoints)


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p> {anecdotes[selected]} {' Has ' + points[selected]  + ' votes '}</p>
      <Button handleClick={() => anecdoteClick()} text="Next Anecdote" />
      <Button handleClick={() => voteClick(selected)} text="Vote" />     
      <h1>Anecdote with the most points</h1>
      <p> {anecdotes[mostPointsId] + ' Has ' + mostPoints + ' votes '}</p>

    </div>
  )
}

export default App