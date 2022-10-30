import React from 'react'

const Input = () => {

function handleChange(e) {
    // e.preventDefault();
    //preventDefault() se realiza la función por defecto del evento, pero no escribe en el input
    // if(e.target.value.length < 10) {
    // e.stopPropagation();
    // }else{
    // console.log(e.target.value);
    // }
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    if(vocales.includes(e.target.value)) {
        e.preventDefault();
    }else{
        console.log(e.target.value);
    }
  }

  return <>
    <input type="text" className='border border-2 border-success' 
    // onKeyDown={handleChange} 
    onKeyDown={handleChange}
    />
    </>
}

export default Input 