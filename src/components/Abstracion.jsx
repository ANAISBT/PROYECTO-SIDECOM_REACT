import React from 'react'
import { useState } from 'react'

function Select ({options, onSelect, defaultOptions}){
    return options.map((options)=>( 
      <>
     {/* <select onChange={(evt)=>onSelect(Number(evt.target.value))}>
        {
       options.map((option) => (
       <option value={option.value}>{option.text}</option>
       ))
       }
    </select> */}
    <input
    onChange={(evt)=>onSelect(Number(evt.target.value))}
    type="radio"
    name="number"
    checkes={defaultOptions===options.value}
    value={options.value}
    />

    <label for={options.value}>{options.text}</label>
    </>
    ))}


    // function Select ({options, onSelect, defaultOptions}){
    //   return ( 
    //     <>
    //    <select onChange={(evt)=>onSelect(Number(evt.target.value))}>
    //       {
    //      options.map((option) => (
    //      <option value={option.value}>{option.text}</option>
    //      ))
    //      }
    //   </select>
    //   </>
    //   )}

const options=[
    {value: 1, text: '1'},
    {value: 2, text: '2'},
];

const Abstracion = () => {
  const [opt, setOpt] = useState(1);

  function opcionSelected(value){
      setOpt(value);
  }

  return <>

  {opt===1 ? <h1>1</h1> : <h1>2</h1>}
  <Select options={options} onSelect={opcionSelected} 
  defaultOptions={opt}/>
    
    </>
}

export default Abstracion