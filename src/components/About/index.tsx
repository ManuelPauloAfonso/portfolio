
import { Container } from "./style"
import Aboutt from '../../Assets/About.svg'
import git from '../../Assets/git.svg'
import group1 from '../../Assets/Group 32.svg'
import group2 from '../../Assets/Group 50.svg'
import group3 from '../../Assets/Group 51.svg'
import group4 from '../../Assets/Group 52.svg'
import group5 from '../../Assets/Group 53.svg'
import group6 from '../../Assets/Group 56.svg'







export default function About(){
    return(
        <Container>
            <h1>Sobre</h1>
            <div className="about-container">
                <div className="text-about">
                    <p>Olá !!! :) <br /> Sou o Manuel Afonso, desenvolvedor Front-end, sempre tive interesse <br /> pela área de TI por possibilitar o desenvolvimento de soluções para <br /> diferentes setores.
                    No front-end gosto de elaborar e construír sistemas que resolvam <br /> problemas ou que melhore algum processo para os usuários, <br /> mantendo uma interface funcional e agradável.</p>
                </div>
                <div>
                    <img className="img1" src={Aboutt} alt="" />
                </div>

            </div>
            <div className="container_ferramenta">
                <h2>Ferramentas e Tecnologias</h2>

                <div className="container_ferramenta1">
                        <img src={group1} alt="" />
                        <img src={group2} alt="" />
                        <img src={group3} alt="" />
                        <img src={group4} alt="" />
                        <img src={group5} alt="" />
                        <img src={group6} alt="" />      
                </div>

            </div>
        </Container>
    )
}