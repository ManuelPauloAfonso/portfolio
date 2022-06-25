import { Container } from "./style"
import Press from '../../Assets/kbd.svg'
import Press1 from '../../Assets/kbd (1).svg'



export default function Banner(){
    return(
        <Container>
                <div className="Container">
                    <h1>Manuel Afonso</h1>
                    <h3>Front-end Developer at RBR Digital</h3>
                    <p>Front-end Developer who loves web technologies and that puts love in everything he does</p>
                    <p className="p">Press <img src={Press} alt="" /> <img src={Press1} alt="" /> para navegar </p>
                </div>

        </Container>
    )
}