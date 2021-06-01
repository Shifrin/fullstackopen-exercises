import React from 'react'

const Header = (props) => (
  <>
    <h1>{props.name}</h1>
  </>
)

const Part = (props) => (
  <>
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  </>
)

const Content = (props) => {
  // using "key" in th emap to avoid react warning
  let parts = props.parts.map((part, key) => <Part key={key} part={part} />)
  return <div>{parts}</div>
}

const Total = (props) => {
  let total = 0

  props.parts.forEach((part) => {
    total += part.exercises
  })

  return (
    <>
      <p>Number of exercises: {total}</p>
    </>
  )
}

const Exercise = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Exercise
