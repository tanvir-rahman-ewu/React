import React, {Component} from 'react'

class SetState extends Component{

    constructor(props)
    {
        super(props)

        this.state = {
            name : 'Tanvir Rahman'
        }
    }
    changeState(msg)
    {
        this.setState({
            name : "I have been changed from " + msg
        })
    }
    render()
    {
        return(
            <div>
                <h1 className="display-4 text-center mt-5">{this.state.name}</h1>
                <div className="text-center">
                    <button className="btn btn-primary mt-5" onClick = {this.changeState.bind(this,"SetState") }>
                    Click me to Change State Value
                    </button>
                </div>
                
            </div>
        )
    }
}
export default SetState