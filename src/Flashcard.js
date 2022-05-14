import React from 'react';
import  play from '../src/Imagens/play-outline.svg';
import setinha from '../src/Imagens/setinha.png';

export default function Flashcard (props) {
    function setEtapaeResposta (etapa, resposta) {
        setEtapa(etapa);
        setResposta(resposta)
    }
    const {Q, R, index}=props;
    const [etapa, setEtapa] = React.useState(1)
    const [resposta, setResposta] = React.useState("")
    if (etapa==1) {
        return (
            <div className="pergunta" onClick={()=> setEtapa(2)}>
                Pergunta {index}
                <img src={play} alt='play'/>
            </div>
        )
    }
    else if (etapa==2 ) {
        return (
            <div className="pergunta questao" >
                {Q}
                <img src={setinha} alt='setinha' onClick={()=> setEtapa(3)}/>
            </div>
        )
    }
    else if (etapa==3) {
        const opçoes= [
        {texto:'Não lembrei', resul:'erro'},
        {texto:'Quase não lembrei', resul:'duvida'},
        {texto:'Zap!', resul:'acerto'}]
        return(
            <div className="pergunta resposta" >
                {R}
                <div className='opçoes'>
                    {opçoes.map((dado, index)=> 
                    <button className={dado.resul} key={index} onClick={()=> setEtapaeResposta(4, dado.resul)}>
                        {dado.texto}
                    </button>)}
                </div>
            </div>
        ) 
        
    }
    else if (etapa==4) {
        if (resposta=="erro") {
            return (
                <div className="pergunta finalizado erro" >
                    <p>Pergunta {index}</p>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            )
            
        }
        else if (resposta=="duvida") {
            return (
                <div className="pergunta finalizado duvida" >
                    <p>Pergunta {index}</p>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            )
        }
        else if (resposta=="acerto") {
            return (
                <div className="pergunta finalizado acerto" >
                    <p>Pergunta {index}</p>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            )
            }

        
    }
}