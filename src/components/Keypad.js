import React from 'react'

class Keypad extends React.Component {

    keyUp = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp={this.keyUp} type="password"></input>
        )
    }
}

export default Keypad;