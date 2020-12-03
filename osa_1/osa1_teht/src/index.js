import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
  const course = 'Half stack application development'

  const part1 = 'Fundamentals of react'
  const excercises1 = 10

  const part2 = 'Using props to pass data'
  const excercises2 = 7

  const part3 = 'State of a component'
  const excercises3 = 14

  return(
    <div>
      <Header header={course}/>
      <Content part1={part1} part2={part2} part3={part3}
        a={excercises1} b={excercises2} c={excercises3}/>
      <Total a={excercises1} b={excercises2} c={excercises3}/>
    </div>
  )
}
const Header = (props) =>{
  return(
    <h1>{props.header}</h1>
  )
}
const Content = (props) =>{
  return(
  <div>
  <Part part={props.part1} excercises={props.a}/>
  <Part part={props.part2} excercises={props.b}/>
  <Part part={props.part3} excercises={props.c}/>
  </div>
  )
}
const Part = (props) =>{
  return(
  <p>{props.part} {props.excercises}</p>
  )
}
const Total = (props) =>{
  return(
  <p>Number of excercises {props.a + props.b + props.c}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));