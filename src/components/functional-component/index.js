import React, { useState } from 'react';
import './styles.css'

function FunctionalComponent( props ){
  const [name, setName] = useState('');

  const changeNamer = event => {
    setName(event.target.value)
  }

  const newComboBox = () =>{
    const names = ["Hanna", "Johanna", "Oliveira"]

    const comboBoxOptions = names.map( 
      option => 
        <option>
          {option}
        </option>
    )

    return (
      <select>
        {comboBoxOptions}
      </select>
    )

  }

  return(
    <>
      <div className={'component__functional'}>
        <h1>Welcome to the functional component</h1>
        <input type="text" value={name}  onChange={ changeNamer } />
        <p>Typed name: {name} </p>
        <p>Name author project: {props.author}</p>
        <p>__________________________________</p>
        <h2>Component Box select options</h2>
        {newComboBox()}
      </div>
    </>
  )
}

export {FunctionalComponent}