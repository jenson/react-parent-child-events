import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component{

    inlineStyle = {
                     padding: "5px",
                     marginTop: "25px",
                     border: "2px solid blue",
                     width: "55%",
                     margin: "0 auto"
                };

    constructor(){
        super();
    }

    render(){
        return (
            <div style={this.inlineStyle}>
                <h2>Parent Component</h2>
                <button onClick={this.parentEvent}>Parent Button Click.</button>
                <ChildComponent parentMethod={() => this.parentEvent()}/>
            </div>
           )
    }

    parentEvent = () => {
        alert("This is a Click inside Parent Component.");
    }

}

export default ParentComponent;