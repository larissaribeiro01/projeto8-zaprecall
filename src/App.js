import Inicio from "./Inicio";
import React from 'react';
import Tela2 from "./Tela2";


export default function App () {
    const [telaInicio, setTelaInicio] = React.useState('inicio')
    return (
        <>
            {telaInicio==='inicio' ? <Inicio  setTelaInicio={setTelaInicio}/> : <Tela2 />}
        </>
    )
}