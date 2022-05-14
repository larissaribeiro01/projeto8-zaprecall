import React from 'react';
import logopequena from '../src/Imagens/logo-pequeno.png'
import ArrayPerguntas from './ArrayPerguntas'
import Footer from './Footer'
import Flashcard from './Flashcard';
import RespostaFooter from './RespostaFooter';
import party from '../src/Imagens/party.png';
import sad from '../src/Imagens/sad.png';


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
            return <Flashcard Q={Q} R={R} key={index} index={index+1} guardarResp={resp => setResps([...resps, resp])}/>})
        }
    }

    function finalizarJogo () {
        if (resps.length==perguntas.length && perguntas.length>0) {
            if (resps.includes('erro')) {
                return ( 
                    <div class='resultado'>
                        
                        <div>
                            <img src={sad} alt='sad'/>
                            Putz!
                        </div>
                        <p> Ainda faltam alguns... 
                            Mas não desanime</p>
                    </div>
                )
            } else {
                return (
                    <div class='resultado'>

                        <div>
                            <img src={party} alt='party'/>
                            Parabéns!
                        </div>
                        <p> Você não esqueceu de nenhum flashcard</p>
                    </div>
                )
            }
        }
    }
    const [perguntas, setPerguntas] = React.useState([]);
    const [resps, setResps] = React.useState([])
    const embPerguntas= embaralharPerguntas();
    const finalizarjogo=finalizarJogo();
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
                {finalizarjogo}
                <p>{resps.length}/{perguntas.length} Concluidos! </p>
                
                <div>
                    {resps.map(resp => <RespostaFooter resp={resp} />)}
                </div>
                
                    
            </Footer>
        </div>
    )
}

