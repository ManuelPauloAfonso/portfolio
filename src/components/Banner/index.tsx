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
                        <div className="btn">
                            <button className="">Portifólio</button>
                        </div>
                    </div>  
                    <div className="container1">
                        <a href="https://github.com/ManuelPauloAfonso"><img src={vector1} alt="" /></a>
                        <a href="http://linkedin.com/in/manuel-afonso-a868b1201"><img src={vector2} alt="" /></a>
                        <a href="manuelpauloafonso29@gmail.com"><img src={vector3} alt="" /></a>
                    </div>
            </div>
        </Container>
    )
}