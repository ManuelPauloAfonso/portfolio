
import { Container } from "./style"
import Projecte from '../../Assets/project.svg'

export default function Project(){

    return(
        <Container>
            <h1>Portfólio</h1>
            <div className="container_Project">
                <div className="containerimg_project">
                    <div>
                        <img src={Projecte} alt="" />
                    </div>
                    <div className="project-img">
                        <h3>Crud html</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam quam, tincidunt a interdum vel, ultrices ac ipsum. </p>
                        <button className="btn">codigo</button>
                        <button className="btn1">acessar</button>
                    </div>
                </div>
                <div className="containerimg_project">
                    <div>
                        <img src={Projecte} alt="" />
                    </div>
                    <div className="project-img">
                        <h3>Crud html</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam quam, tincidunt a interdum vel, ultrices ac ipsum. </p>
                        <button className="btn">codigo</button>
                        <button className="btn1">acessar</button>
                    </div>
                </div>

            </div>
        </Container>
    )
}