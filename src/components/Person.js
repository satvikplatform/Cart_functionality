import React, { useState }  from 'react'
import { useReducer } from 'react'


const reducer = (state, action) => {
    switch(action.type) {
      case "ADD": return {show: action.payload.show,  btnMessage: action.payload.btnMessage};
      default: return state;
    }
};
const Person = (props) => {
const[task, dispatch]  = useReducer(reducer, {show:false,btnMessage:"Show info",});

   const btnClickHandler = () => {
      let value = {show: task.show === false ? true : false, btnMessage: task.btnMessage === "Show info" ? "Hide info" : "Show info"};
      dispatch({type:"ADD", payload:value});
   }

  return (
    <>
     <button onClick={() => {btnClickHandler()}}>{task.btnMessage}</button>
     {task.show &&
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