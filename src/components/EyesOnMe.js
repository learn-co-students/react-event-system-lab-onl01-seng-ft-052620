import React from 'react'

class EyesOnMe extends React.Component {

    focusE = () => {
        console.log('Good!')
    }

    blurE = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.focusE} onBlur={this.blurE}></button>
        )
    }
}   

export default EyesOnMe;