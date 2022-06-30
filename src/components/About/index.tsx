
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
                    <p>Olá !!! :) <br /> ultricies blandit nibh a scelerisque. Donec eget laoreet risus, vel congue metus. Etiam at condimentum turpis. </p>
                    <p>Nulla risus enim, finibus non dictum lobortis, ullamcorper et erat. Aenean feugiat leo vel nisl dignissim, a venenatis augue dapibus. Vivamus sit amet dignissim </p>
                </div>
                <div>
                    <img src={Aboutt} alt="" />
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