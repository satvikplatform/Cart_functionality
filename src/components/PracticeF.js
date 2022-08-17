import React from "react";
import { useState } from "react";

const PracticeF = (props) => {
    const[color, setColor] = useState("pink");
    const[value, setValue] = useState(0);

    const changeColor = () => {
        setColor(color === "pink"? "yellow" : "pink");
    }
    const increment = () => {
        setValue(value + 1);
    }

    const decrement = () => {
        setValue(value - 1);
    }

    return(
        <div>
            <h1 style={{backgroundColor:color}}>Hello, this is from the {props.message} component</h1>
            <button onClick={changeColor}>Change color</button>

            <h3>Inrement and Decrement the value: {value} (by function)</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export {PracticeF};