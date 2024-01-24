import React from 'react'
class Clock extends React.Component{
    constructor(props){ 
        // constructor doesnot return value & use as initilization
        super(props)
        // parent component data used
        this.state ={date: new Date()}
    }

    componentDidMount(){
    this.timerID = setInterval( () => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        })

    }

    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default Clock


