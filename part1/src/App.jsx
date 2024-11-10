import { useState, useEffect } from 'react'
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const totalExercises = exercises1 + exercises2 + exercises3

  useEffect(() => {
    props.setTotalExercises(totalExercises)
  }, [totalExercises, props])

  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>{props.text} {props.totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const [totalExercises, setTotalExercises] = useState(0)

  return (
    <div>
      <Header course={course} />
      <Content setTotalExercises={setTotalExercises} />
      <Total text="Number of exercises" totalExercises={totalExercises} />
    </div>
  )
}

export default App;