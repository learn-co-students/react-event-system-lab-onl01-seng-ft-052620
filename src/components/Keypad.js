// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends Component {
    constructor() {
        super()
        this.state = {
            password: null
        }
    }

    render() {
        return <input type="password" onKeyUp={this.handleKeyUp} />
    }

    handleKeyUp = (event) => {
        // console.log(`Entering password ${event.target.value}`)
        console.log(`Entering password...`)
    }
}