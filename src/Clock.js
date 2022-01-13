import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            date:new Date()
        }
        // this.tick()=this.bind(tick);
    }
    tick() {
       this.setState({date:new Date()})
   }
    componentDidMount(){
        this.timeID=setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    render() {

        return (
            <div>
                helllo it's {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}
