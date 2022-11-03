import React from 'react'

export function LoginConditional({existeUsuario=false, children}) {
  
    if(!existeUsuario){
        return <div>Debe estar logueado para ver este contenido</div>
    }
    return (
    <>
    {children}
    </>
  )
}

const ComponentesCondicionales = () => {
  return (
    <div>CompónentesCondicionales</div>
  )
}

export default ComponentesCondicionales