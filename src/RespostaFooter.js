export default function RespostaFooter (props) {
    if (props.resp=='erro') {
        return (
            
            <ion-icon name="close-circle" color="#2FBE34"></ion-icon>
            
        )
    }
    else if (props.resp=='duvida') {
        return (
            
            <ion-icon name="help-circle"></ion-icon>
           
        )
    }
    else if (props.resp=='acerto') {
        return (
            
            <ion-icon name="close-circle"></ion-icon>
            
        )
    }
}