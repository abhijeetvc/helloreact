import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import App1 from './App1'

const person={
    name:"John",
    city:"Pune"
}

function MyApp(){
   return(
     <div>
        <h1>This is the MyApp Component</h1>
        <Message message="Hello react!!!"/>
        <Message1 person={person}/>
     </div>
   )
}
// props: Information/properties passed from one component to another component
function Message({message}){
  return(
    <div>
        <h1>This is Message Component</h1>
        {message}   
    </div>
  )
}

function Message1({person}){
  return(
      <div>
        Name : {person.name} City: {person.city}
      </div>
  )
}

ReactDOM.render(
  <div>
      <App1/>
  </div>
   
,
  document.getElementById('root')
);

// two parameters: a) What has to be rendered? , b) Where to render?
