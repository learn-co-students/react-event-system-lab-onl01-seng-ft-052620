// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

eventFocus = () => {
console.log("Good!")
}

eventBlur = () => {
console.log("Hey! Eyes on me!")
}

    render() {

        return(
            <button onFocus={this.eventFocus} onBlur={this.eventBlur}> </button>
        )
    }




}

export default EyesOnMe;