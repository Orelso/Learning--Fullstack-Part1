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
      let positive = Math.floor((props.percent / (props.good + props.neutral + props.bad) * 100))

      return(
        <div>    <h1>Statistics</h1>
        <table>
        <tbody>
        <tr>
            <td><StatisticLine text="Good:"/></td>
            <td><StatisticLine text={props.good} /></td>
        </tr>
        <tr>
            <td><StatisticLine text="Neutral:"/></td>
            <td><StatisticLine text={props.neutral} /></td>
        </tr>
        <tr>
            <td><StatisticLine text="Bad:"/></td>
            <td><StatisticLine text={props.bad} /></td>
        </tr>
        <tr>
            <td><StatisticLine text="Total:"/></td>
            <td><StatisticLine text={total} /></td>
        </tr>
        <tr>
            <td><StatisticLine text="Average:"/></td>
            <td><StatisticLine text={average} /></td>
        </tr>
        <tr>
            <td><StatisticLine text="Positive:" /></td>
            <td><StatisticLine text={positive +  '%'} /></td>
        </tr>
        </tbody>
        </table>
        </div>
      )
   }
}

const StatisticLine = (props) => {
  return(
  <>
  <div>{props.text}</div>
  </> 
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


 let percent = good + neutral


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