import React, {Component} from 'react'

class ClassComponent extends Component{

    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div>
                <h1 className="display-4 mt-5 text-center">I am from Class Component</h1>
            </div>
        )
    }
}
export default ClassComponent