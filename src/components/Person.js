import React, { useState } from 'react'

const Person = (props) => {
    const[state, setState] = useState({
        show: false,
        buttonMessage :"Show info",
    });

    const  showHandler = () => {
      console.log("hello");
     setState((prevState) => {return {show: prevState.show === false? true : false,  buttonMessage: prevState.buttonMessage === "Show info"?"Hide info":"Show info"}});
    }


  return (
    <>
     <button onClick={showHandler}>{state.buttonMessage}</button>
     {state.show &&
        <div>
            <p>Name:{props.item.name}</p>
            <p>Age:{props.item.age}</p>
            <p>Phone number:{props.item.phoneNum}</p>
            <p>Address:{props.item.address}</p>
            <p>Gmail:{props.item.gmail}</p>
        </div>
      }
    </>
  )
}

export default Person