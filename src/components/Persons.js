import React from 'react'
import persons_info from '../data/person_info'
import Person from './Person'


const Persons = () => {
    let information = persons_info.map((item,index) => {return <Person key={index} item={item} />})

  return (
    <div>
       {information}
    </div>
  )
}

export default Persons