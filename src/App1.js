import React from 'react'
// function App1(){
//     return(
//       <div>
//          <h1>This is Heading2.</h1>
//          <p>This is a new paragraph.</p>
//       </div>
//     )
//  }

class App1 extends React.Component{
  constructor(){
      super()
      this.state={
          name:"John Doe"
      }
  }
      render(){
        return(
          <div>
              <h1>This is Heading2.</h1>
              <p>This is a new paragraph.</p>
              Name: {this.state.name}
          </div>
        )
      }
 }

 export default App1