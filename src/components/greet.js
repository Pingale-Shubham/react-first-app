import React from 'react'

function greet(props) {
  const {name, courseName} =props;

  return (
    <div>
      <h1>Hello My name is {name} and My course is {courseName}</h1>
      <h2> </h2>
    </div>
  )
}

export default greet
