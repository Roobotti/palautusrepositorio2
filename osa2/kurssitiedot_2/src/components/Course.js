import React from 'react'

const Header = ({name}) => <h2>{name}</h2>

const Total = ({ parts }) => {
    const total = parts.map(part => part.exercises).reduce((s,p) => s + p)
  return (
    <b>yhteensä {total} tehtävää</b>
  )
}

const Part = ({name, exercises}) =>
  <p>{name} {exercises}</p>

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}  
        </div>
    )
}
const Course = ({course}) => {  
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
  )
}

export default Course