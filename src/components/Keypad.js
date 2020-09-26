// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

eventHandler = () => {
    console.log("Entering password...")
}

    render() {
        return (
            <input onKeyUp={this.eventHandler} type="password" />

        )
    }




}

export default Keypad;