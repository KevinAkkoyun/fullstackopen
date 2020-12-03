import React from 'react';
import ReactDOM from 'react-dom';



const Hello = (props) =>{

  return(
     <div>
     <p>Hello {props.name}, you are {props.age} years old</p>
   </div>
   )
}
const App = () =>{
  const nimi = 'pekka';
  const ika = 10;
  return(
    <>
      <h1>Greetings</h1>
      <Hello name="mikko" age={20 + 10}/>
      <Hello name={nimi} age={ika}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));