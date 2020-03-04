import React, { Component } from 'react'

class VariableElement extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            value : true
        }
    }

    ///if we want to write condition inside return then we need
    /// to use variable element

    render()
    {
        return (
            this.state.value ?
            (
                <div className="text-center mt-5 display-4">Variable Element : True</div>
            )
            : 
            (
                <div className="text-center mt-5 display-4">Variable Element:  False</div>
            )
        )
    }
}

export default VariableElement