import React, { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.clickHandler}>{props.text}</button>
}

const Result = ({ text, count }) => {
  let percentage

  if (text === 'positive') {
    count = count > 0 ? count : 0
    percentage = ' %'
  }

  return (
    <div>
      <span>
        {text} {count}
        {percentage}
      </span>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (value) => setGood(value)
  const setToNeutral = (value) => setNeutral(value)
  const setToBad = (value) => setBad(value)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" clickHandler={() => setToGood(good + 1)} />
      <Button text="neutral" clickHandler={() => setToNeutral(neutral + 1)} />
      <Button text="bad" clickHandler={() => setToBad(bad + 1)} />
      <h2>statistics</h2>
      <Result text="good" count={good} />
      <Result text="neutral" count={neutral} />
      <Result text="bad" count={bad} />
      <Result text="all" count={good + neutral + bad} />
      <Result text="average" count={(good - bad) / (good + neutral + bad)} />
      <Result text="positive" count={(good / (good + neutral + bad)) * 100} />
    </div>
  )
}

export default App
