import React from 'react';
import ReactDOM from 'react-dom';


class Watch extends React.Component {
    constructor(){
        super();
        this.state = {minute:0, second: 0};
    }
    componentDidMount(){
        setInterval(function()){
            return this.setState((state, props)=>{
            
            return{
                second: state.second ==59?0:state.second+1
                minute:state.second==59?state.minute+1:state.minute
            }
            });
        }, 1000)
    }
    render() {
        return(
        <p>{this.state.minute}:{this.state.second}</p>
        );
    }
}

export default Watch;
