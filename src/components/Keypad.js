// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.handleKeyUp} />
            </div>
        )
    }

    handleKeyUp = () => {
        console.log("Entering password...")
    }

}

export default Keypad;


