import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar =() =>
(
    <>

        <div className="contenedor_completo">
            <nav className="fixed-top">
                <input type="checkbox" id="check"></input>
                <label for="check" class="checkbtn">
                    <FontAwesomeIcon icon={faBars} className="barras"/>
                </label>
                <a href="#" className="logo"><strong>.branko</strong></a>
                <ul>
                    <li className="seccionesnav"><a href="#seccion1" > Acerca de Mi <FontAwesomeIcon icon={faUser} className="Iconos"/></a></li>
                    <li className="seccionesnav"><a href="#seccion2" >Habilidades <FontAwesomeIcon icon={faAward} className="Iconos"/></a></li>
                    <li className="seccionesnav"><a href="#seccion3" > Proyectos <FontAwesomeIcon icon={faFolder} className="Iconos"/></a></li>
                    <li className="seccionesnav"><a target="_blank" href="https://github.com/Blvarez" > Github <FontAwesomeIcon icon={faGithub} className="Iconos"/></a></li>
                    <li className="seccionesnav"><a href="#seccion4" > Contactame <FontAwesomeIcon icon={faEnvelope} className="Iconos"/></a></li>
                </ul>
            </nav>
        </div>
    </>
)

export default Navbar;