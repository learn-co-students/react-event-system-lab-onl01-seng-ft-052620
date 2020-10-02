// Code EyesOnMe Component Here
import React, { Component } from 'react'

export class EyesOnMe extends Component {
  good = () => {
    console.log("Good!")
  }

  eyes = () => {
    console.log("Hey! Eyes on me!")
  }
  
  render() {


    return (
      <div>
       <button onFocus={this.good} onBlur={this.eyes}></button> 
      </div>
    )
  }
}

export default EyesOnMe
