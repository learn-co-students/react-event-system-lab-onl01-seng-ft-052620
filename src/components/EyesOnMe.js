import React, { Component } from 'react'

export class EyesOnMe extends React.Component {
    render() {
       return (
       <div>
           <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
       </div>
       )
    }

    handleFocus() {
       console.log('Good!')
    }

    handleBlur() {
        console.log('Hey! Eyes on me!')
    }
}

export default EyesOnMe