import { Container } from "./style"
import Logo from '../../Assets/ManuelAfonso.svg'


export default function Header(){
    return(
        <Container>
            <img src={Logo} alt="" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Portfolio</li>
                    <li>Contactos</li>
                </ul>
            </nav>
        </Container>
    )
}