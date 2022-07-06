import { Container } from "./style"
import Logo from '../../Assets/ManuelAfonso.svg'
import Menu from '../../Assets/menu hamburguer.svg'


export default function Header(){
    return(
        <Container>
            <img src={Logo} alt="" />
            <nav>
                <ul className="ul">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Portfolio</li>
                    <li>Contactos</li>
                </ul>
                <ul className="ulone">
                    <li><img src={Menu} alt="" /></li>
                </ul>
            </nav>
        </Container>
    )
}