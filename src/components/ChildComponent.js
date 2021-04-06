import React, { Component } from "react";

class ChildComponent extends Component{

    inlineStyle = {
        border: "2px solid red",
        padding: "5px",
        margin: "5px"
   };

    constructor(props){
        
        super(props);
    }

    render(){
        return (
            <div style={this.inlineStyle}>
                <h2>Child Component</h2>
                <button onClick={this.childEvent}>Child Button Click.</button><br/><br/>
                <button onClick={this.props.parentMethod}>Trigger Parent Button Click Method From Child.</button><br/><br/>
            </div>
        )
    }

    childEvent(){
        alert("This is a Click inside Child Component.");
    }

}

export default ChildComponent;