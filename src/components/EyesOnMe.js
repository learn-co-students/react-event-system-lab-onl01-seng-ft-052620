import React, {Component} from 'react'

class EyesOnMe extends Component {

    lookatme = () => {
        console.log('Hey! Eyes on me!')
    }

    youregood = () => {
        console.log('Good!')
    }

    render(){
        return(
            <button onFocus={this.youregood} onBlur={this.lookatme}>Szia Cica!</button>
        )
    }
}

export default EyesOnMe
