import React, {Component} from 'react'

class Keypad extends Component {

    logging = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <input onKeyUp={this.logging} type="password" />
        )
    }
}

export default Keypad