import React, { useState } from 'react'

const Button = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}>{text}</button>
}

const Statistics = ({ text, count }) => {
  let percentage

  if (text === 'positive') {
    count = count > 0 ? count : 0
    percentage = ' %'
  }

  return (
    <tr>
      <td>{text}</td>
      <td>
        {count} {percentage}
      </td>
    </tr>
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

  if (good + neutral + bad > 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button text="good" clickHandler={() => setToGood(good + 1)} />
        <Button text="neutral" clickHandler={() => setToNeutral(neutral + 1)} />
        <Button text="bad" clickHandler={() => setToBad(bad + 1)} />
        <h2>statistics</h2>
        <table>
          <tbody>
            <Statistics text="good" count={good} />
            <Statistics text="neutral" count={neutral} />
            <Statistics text="bad" count={bad} />
            <Statistics text="all" count={good + neutral + bad} />
            <Statistics
              text="average"
              count={((good - bad) / (good + neutral + bad)).toFixed(1)}
            />
            <Statistics
              text="positive"
              count={((good / (good + neutral + bad)) * 100).toFixed(1)}
            />
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" clickHandler={() => setToGood(good + 1)} />
      <Button text="neutral" clickHandler={() => setToNeutral(neutral + 1)} />
      <Button text="bad" clickHandler={() => setToBad(bad + 1)} />
      <h2>statistics</h2>
      <span>No feedback given</span>
    </div>
  )
}

export default App
