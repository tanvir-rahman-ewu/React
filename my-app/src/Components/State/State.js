import React, {Component} from 'react'

class State extends Component{
    constructor(props)
    {
        super(props)

        this.state = {
            name : "Tanvir Rahman"
        }
    }

    render()
    {
        return(
            <div>
                <h1 className="display-4 mt-5 text-center"> value of this.state.name :{this.state.name}</h1>
            </div>
            

            
        )
    }
}

export default State