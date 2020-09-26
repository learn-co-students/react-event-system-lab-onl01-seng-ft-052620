import React, { Component } from 'react'

export class Keypad extends React.Component {
    render() {
      return (
          <div>
              <input type="password" onKeyUp={this.handleKepUp}/>
          </div>
      )
    }

    handleKepUp = () => {
        console.log('Entering password...')
    }
}

export default Keypad