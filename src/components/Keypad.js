// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {
    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }

    handleKeyUp = () => {
        console.log('Entering password...')
    }
}

export default Keypad
