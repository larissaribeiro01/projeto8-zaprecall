

export default function Inicio (props) {
    return (
        <div className="inicio">
            <img src='Imagens\logo.png' ></img>
            <h1>ZapRecall</h1>
            <button onClick={()=> props.setTelaInicio('n')}>Iniciar Recall!</button>
        </div>

    )
}