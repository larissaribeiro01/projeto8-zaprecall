import React from 'react';
import logo from '../src/Imagens/logo.png'


export default function Inicio () {
    const [telaInicio, setTelaInicio] = React.useState(true)
    if (telaInicio) {
        return (
            <div className="inicio">
                <img src={logo} ></img>
                <h1>ZapRecall</h1>
                <button onClick={()=> setTelaInicio(false)}>Iniciar Recall!</button>
            </div>
    
        )

    } else {
        return <></>
    }
    
}