// Code EyesOnMe Component Here

import React from 'react'


class EyesOnMe extends React.Component{


render () {
    return (
        <div>
        <button onBlur={this.handleBlur} onFocus={this.handleFocus}></button>
        </div>
    )  
}


handleFocus = () => {
    console.log('Good!')
}

handleBlur = () => {
    console.log('Hey! Eyes on me!')
}


}
export default EyesOnMe