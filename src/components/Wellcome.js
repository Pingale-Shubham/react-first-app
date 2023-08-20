// import React, { Component } from 'react'

// class Wellcome extends Component {
//   constructor(props){
//     super(props);
//       this.state = {
//         msg: "Hi, My name is Shubham"
//       }
      
//       this.Click = this.Click.bind(this)

//     }
//     Click(){
//       this.setState({
//         msg: "I am live in Dhule city"
//       })
//     }
//   render() {
//     return (
//       <>
//         <h1>Wellcome</h1>
//         <p>{this.state.msg}</p>

//         <button onClick= {this
//         .Click}>Change</button>
//       </>
//     )
//   }
//   }


// export default Wellcome


import React, { Component } from 'react'

class Wellcome extends Component {
  render() {
    const {name, courseName} =this.props;
    return (
      <div>This Wellcome Class Component
      <h1>Hello, my name is {name} and my cousrse is {courseName}</h1>
        
      </div>
    )
  }
}

export default Wellcome
