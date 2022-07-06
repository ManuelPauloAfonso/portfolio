import { Container } from "./style"
import vector1 from '../../Assets/Vector (1).svg'
import vector2 from '../../Assets/Vector (2).svg'
import vector3 from '../../Assets/Vector.svg'

export default function Banner(){
    return(
        <Container>
            <div className="section-container">
                    <div>
                        <h2>Desenvolvedor Front End</h2>
                        <p>Bem-vindo(a) ao meu portfólio, conheça alguns projetos desenvolvidos.</p>
                        <button>Portifólio</button>
                    </div>  
                    <div className="container1">
                        <img src={vector1} alt="" />
                        <img src={vector2} alt="" />
                        <img src={vector3} alt="" />

                    </div>
            </div>
        </Container>
    )
}