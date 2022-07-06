
import { Container } from './style'
import vector1 from '../../Assets/Vector (4).svg'
import vector2 from '../../Assets/Vector (5).svg'
import vector3 from '../../Assets/Vector (3).svg'

export default function Footer(){
    return(
        <Container>
                <h2>Contactos</h2>
                <div className='container_footer'>
                    <ul>
                        <li><img src={vector1} alt="" /></li>
                         <span>github</span>
                        <li><img src={vector2} alt="" /></li>
                        <span>Linkedin</span>
                        <li><img src={vector3} alt="" /></li>
                        <span>Email</span>
                    </ul>
                </div>
        </Container>
    )
}