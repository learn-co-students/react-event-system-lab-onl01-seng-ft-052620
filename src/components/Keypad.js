import React, { Component } from 'react'

export class Keypad extends Component {
   
//    contructor(){
  
//        this.state = {

//        }
//    }

   handleKeyUp = (event) => {
    console.log('Entering password...')
   }
   
    render() {
        return (
            <div>
              <input onKeyUp={this.handleKeyUp} type="password"></input>  
            </div>
        )
    }
}

export default Keypad

