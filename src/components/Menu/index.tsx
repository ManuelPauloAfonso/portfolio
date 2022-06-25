import { Container } from "./style";
import Logo from '../../Assets/ManueleAfonso.svg'
import Dropo from '../../Assets/Link (1).svg'
import Github from '../../Assets/Github.svg'
import Link from '../../Assets/Link.svg'
import {MdOutlineDarkMode} from 'react-icons/md'


export default function Menu(){

    return(
        <Container>
            <a href=""><img src={Logo} alt="" /></a>
            <nav>
                    
                    <a className="one" href="">
                        <img src={Dropo} alt="" />
                    </a>
                    <a className="one" href="">
                        <img src={Github} alt="" />
                    </a>
                    <a className="one" href="">
                        <img src={Link} alt="" />
                    </a>
                    <a className="one1" href="">
                       <MdOutlineDarkMode
                        fontSize={24}
                       />
                    </a>

            </nav>
        </Container>
    )
}

