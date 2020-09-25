import React, {Component} from 'react'

export default class EyesOnMe extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    handleFocus(){
        console.log("Good!")
    }

    handleBlur(){
        console.log("Hey! Eyes on me!")
    }

    render(){
        return(
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur} ></button>
            </div>
        )
    }
}
