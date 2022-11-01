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
      let total = props.good + props.neutral + props.bad
      let average = props.good + props.neutral - props.bad / 3
      let positive = Math.floor((props.percent / (props.good + props.neutral) * 100))

   return(
    <div>
    <h1>Statistics</h1>
    <StatisticLine text="Good" good={props.good} />
    <StatisticLine text="Neutral" good={props.neutral} />
    <StatisticLine text="Bad" good={props.bad} />
    <StatisticLine text="Total" good={total} />
    <StatisticLine text="Average" good={average} />
    <StatisticLine text="Positive" good={positive + '%'} />
  
    </div>
   )
   }
}

const StatisticLine = (props) => {
  return(
  <div>
  <p>{props.text}: {props.good}</p>
  </div> 
  )

}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

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
      <Button handleClick={() => goodClick()} text="Good" />
      <Button handleClick={() => neutralClick()} text="Neutral" />
      <Button handleClick={() => badClick()} text="Bad" />
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