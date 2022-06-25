import { Container } from "./style";
import Logo from '../../Assets/ManueleAfonso.svg'
import Dropo from '../../Assets/Link (1).svg'
import Github from '../../Assets/Github.svg'
import Link from '../../Assets/Link.svg'


export default function Menu(){

    return(
        <Container>
            <a href=""><img src={Logo} alt="" /></a>
            <nav>
                    <a href="">
                        <img src={Dropo} alt="" />
                    </a>
                    <a href="">
                        <img src={Github} alt="" />
                    </a>
                    <a href="">
                        <img src={Link} alt="" />
                    </a>
            </nav>
        </Container>
    )
}

