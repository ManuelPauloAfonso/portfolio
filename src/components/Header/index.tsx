import { Container } from "./style"
import Logo from '../../Assets/ManuelAfonso.svg'
import Menu from '../../Assets/menu hamburguer.svg'


export default function Header(){
    return(
        <Container>
            <img src={Logo} alt="" />
            <nav>
                <ul className="ul">
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Contactos</a></li>
                </ul>
                <ul className="ulone">
                    <li><img src={Menu} alt="" /></li>
                </ul>
            </nav>
        </Container>
    )
}