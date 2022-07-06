
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
                        <li><a href="https://github.com/ManuelPauloAfonso"><img src={vector1} alt="" /></a></li>
                         <span>github</span>
                        <li> <a href="http://linkedin.com/in/manuel-afonso-a868b1201"> <img src={vector2} alt="" /></a></li>
                        <span>Linkedin</span>
                        <li> <a href="manuelpauloafonso29@gmail.com"><img src={vector3} alt="" /></a></li>
                        <span>Email</span>
                    </ul>
                </div>
        </Container>
    )
}