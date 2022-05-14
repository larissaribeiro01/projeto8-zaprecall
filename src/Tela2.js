
import logopequena from '../src/Imagens/logo-pequeno.png'
import ArrayPerguntas from './ArrayPerguntas'
import Footer from './Footer'


function Pergunta (props) {
    return (
        <div className="pergunta" >
            Pergunta {props.pergunta}
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}


export default function Tela2 () {
    return (
        <div className="tela2">
            <div>
                <img src={logopequena} alt="logopequena"></img>
                <h1>ZapRecall</h1>
            </div>
            <div className="perguntas">
                {ArrayPerguntas.map((dado, index)=> <Pergunta pergunta={index+1} key={index}/>)}
            </div>
            <Footer>
            <p>0/4 Concluidos!</p>
            </Footer>
        </div>
    )
}

