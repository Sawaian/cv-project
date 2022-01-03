
import React, { Component } from "react";

class Display extends Component {
    constructor(props){
        super(props);
        
    }
redner(){

    const {props} = this.props;
    for(let i = 0; i < props.length; i++){
        return (<div className={props[i]}>
            <label htmlFor={props[i] + "Input"}> {props[i]} </label>
            </div>
        )
    }
}
}
