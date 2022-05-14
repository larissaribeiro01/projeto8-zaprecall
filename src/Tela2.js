import React from 'react';
import logopequena from '../src/Imagens/logo-pequeno.png'
import ArrayPerguntas from './ArrayPerguntas'
import Footer from './Footer'
import Flashcard from './Flashcard';





export default function Tela2 () {
    function embaralharPerguntas () {
        if (perguntas.length===0) {
            ArrayPerguntas.sort((a,b)=> Math.random() -0.5)
            setPerguntas([...ArrayPerguntas]);
            return <></>
        } 
        else {
        return perguntas.map((pergunta, index)=> {
            const {Q, R}=pergunta;
            return <Flashcard Q={Q} R={R} key={index} index={index+1}/>})
        }
    }
    const [perguntas, setPerguntas] = React.useState([]);
    const embPerguntas= embaralharPerguntas();
    return (
        <div className="tela2">
            <div>
                <img src={logopequena} alt="logopequena"></img>
                <h1>ZapRecall</h1>
            </div>
            <div className="perguntas">
                {embPerguntas}
            </div>
            
            
            <Footer>
                <p>0/4 Concluidos!</p>
            </Footer>
        </div>
    )
}

