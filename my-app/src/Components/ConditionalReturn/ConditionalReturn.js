import React, {Component} from 'react'

class ConditionalReturn extends Component{

    constructor(props)
    {
        super(props)

        this.state = {
            login : false,
            msg : "Log In"
        }
    }

    logIn()
    {
        this.setState({
            msg: "Log Out",
            login : true
        })
    }
    logOut()
    {
        this.setState({
            msg: "Log In",
            login: false
            
        })
    }

    render()
    {
        
            if(this.state.login)
            {
                return(
                    <div className="text-center mt-5">
                        <button onClick={this.logOut.bind(this)} className="btn btn-danger">{this.state.msg}</button>
                    </div>
                )
            }
            else
            {
                return(
                    <div className="text-center mt-5">
                        <button onClick={this.logIn.bind(this)} className="btn btn-success">{this.state.msg}</button>
                    </div>
                )
            }
    }
}

export default ConditionalReturn