// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {
    // tickle = () => {
    //     console.log('Tee hee!');
    //   }
    handleOnKeyUp = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.handleOnKeyUp}/>
            </div>
        )
    }
}

export default Keypad
