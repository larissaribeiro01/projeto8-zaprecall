import React from 'react';
export default function Flashcard (props) {
    const {Q, R, index}=props;
    const [etapa, setEtapa] = React.useState(1)
    if (etapa==1) {
        return (
            <div className="pergunta" onClick={()=> setEtapa(2)}>
                Pergunta {index}
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    }
    else if (etapa==2 ) {
        return <p onClick={()=> setEtapa(3)}>{Q}</p>
    }
    else if (etapa==3) {
        return <p onClick={()=> setEtapa(4)}>{R}</p>
    }
    else if (etapa==4) {
        return <p>FIM</p>
    }
}