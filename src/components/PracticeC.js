import React from "react";


class PracticeC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color:"pink",
            value: 0
        }
    }
    changeColor = () => {
        this.setState({color:this.state.color === "pink"? "yellow" : "pink"});
    }
    increment = () => {
        this.setState({value: this.state.value + 1});
    }
    decrement = () => {
        this.setState({value: this.state.value - 1});
    }

   render() {
    return(
        <div>
            <h1 style={{backgroundColor: this.state.color}}>Hello, this is from the {this.props.message} component</h1>
            <button onClick = {this.changeColor}>Change Color</button>

            <h3>Increment and Decrement the value: {this.state.value} (by class)</h3>
            <button onClick = {this.increment}>Increment</button>
            <button onClick = {this.decrement}>Decrement</button>
        </div>
    )
   }
}

export {PracticeC};