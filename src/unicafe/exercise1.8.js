import { useState } from 'react'


const Statistics = (props) => {
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
        <div>
          <h1>Statistics</h1>
            <p>No feedback given yet!</p>
        </div>
      )
    } else {
   return(
    <div>
    <h1>Statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {props.good + props.neutral + props.bad}</p>
      <p>Average: {props.good + props.neutral - props.bad / 3}</p>
      <p>Positive: {Math.floor((props.percent / (props.good + props.neutral) * 100))}%</p>  
     
    </div>
   )
   }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }


 let percent = good + neutral - bad 


  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={goodClick}>Good</button>
      <button onClick={neutralClick}>Neutral</button>
      <button onClick={badClick}>Bad</button>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad}
        percent={percent}
      />
    </div>
  )
}

export default App