import React from 'react';
import ReactDOM from 'react-dom';


class Watch extends React.Component {
    constructor(){
        super();
        this.state = {minute:0, second: 0};
    }
    componentDidMount(){
        setInterval(function){
            
        }
    }
    render() {
        return(
            <p>Stop Watch</p>
        );
    }
}

export default Watch;
