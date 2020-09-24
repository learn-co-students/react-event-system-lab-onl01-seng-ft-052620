import React, { Component } from 'react'

export class EyesOnMe extends Component {

    handleFocus = e => {
        console.log('Good!')
    }

    handleBlur = e => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur} ></button>
            </div>
        )
    }
}

export default EyesOnMe
