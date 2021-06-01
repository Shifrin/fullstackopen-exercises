import React from 'react'

const Header = (props) => (
  <>
    <h1>{props.course}</h1>
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
  const course = 'Half Stack application development'
  const parts = [
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
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default Exercise
