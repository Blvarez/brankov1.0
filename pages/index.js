import Layout from "../components/Layout";


const Index = () =>
(


    <Layout>
        <section id="seccion1">
            <img className="imagenMia" src="https://www.rightclickit.com.au/wp-content/uploads/2018/09/Image-Coming-Soon-ECC.png" alt="Proximamente...." />
            <div className="textoPresen">
                <h1 className="primerTituloPC">Hola,</h1>
                <h2 className="segundoTituloPC">Soy Branko Antonio Alvarez Molina </h2>
                <h3 className="tercerTituloPC">Practicante de Ingenieria en Computacion e Informatica</h3>
            </div>
            <div className="textoAcerca">
                <h2 className="tituloAcerca">Acerca de Mi</h2>

                <p className="parrafoAcerca">
                    Soy estudiante de Cuarto Anio de la carrera de Ingenieria en Computacion e Informatica de la Universidad Andres Bello
                    en estos momentos me encuentro en la busqueda de mi Practica Profesional me he desempaniado anteriormente en trabajos
                    donde he tenido que estar en equipo(Ferreteria y Panaderia) y bajo presion(Atencion al Publico en un Cine). En estos
                    momentos me encuentro con una gran disponibilidad para aprender y trabajar...
                </p>


            </div>

        </section>


        <section id="seccion2">
            <h2 className="primerTituloSC">Mis Habilidades</h2>


            < div className="lenguajes">
                <h3 className="titulosSC">Lenguajes</h3>

                <div className="PYTHONN">
                    <p>Python</p>
                    <div className="container">
                        <div className="skills python">60%</div>
                    </div>
                </div>

                <div className="JAVAA">
                    <p>Java</p>
                    <div className="container">
                        <div className="skills java">70%</div>
                    </div>
                </div>

                <div className="SQLL">
                    <p>Sql</p>
                    <div className="container">
                        <div className="skills sql">70%</div>
                    </div>
                </div>

                <div className="JAVASCRIPTT">
                    <p>Javascript</p>
                    <div className="container">
                        <div className="skills javascript">60%</div>
                    </div>
                </div>

                <div className="HTMLL">
                    <p>HTML</p>
                    <div className="container">
                        <div className="skills html">80%</div>
                    </div>
                </div>

                <div className="CSSS">
                    <p>CSS</p>
                    <div className="container">
                        <div className="skills css">70%</div>
                    </div>
                </div>

            </div>


            < div className="frameworks">
                <h3 className="titulosSC">Frameworks</h3>

                <div className="REACTT">
                    <p>React</p>
                    <div className="container">
                        <div className="skills react">50%</div>
                    </div>
                </div>

            </div>

            < div className="materia">
                <h3 className="titulosSC">Materia</h3>

                <div className="DESARROLLOWEBB">
                    <p>Desarrollo Web</p>
                    <div className="container">
                        <div className="skills desarrolloweb">50%</div>
                    </div>
                </div>

                <div className="BASEDATOSS">
                    <p>Base de Datos</p>
                    <div className="container">
                        <div className="skills basedatos">70%</div>
                    </div>
                </div>


                <div className="SISTEMAOPERATIVOSS">
                    <p>Sistemas Operativos</p>
                    <div className="container">
                        <div className="skills sistemaoperativos">60%</div>
                    </div>
                </div>

                <div className="REDESCOMPUTADORESS">
                    <p>Redes y Computadores</p>
                    <div className="container">
                        <div className="skills redescomputadores">60%</div>
                    </div>
                </div>

            </div>

        </section>


        <section id="seccion3">
            <h2 className="primerTituloTC">Projectos</h2>

            <a target="_blank" href="https://github.com/Blvarez/AutomotoraWebApp" id="link">
                <div className="carta">

                    <h2 className="tituloAutomotora">AUTOMOTORA WEB APP</h2>
                    <div className="cabezaC">
                        <div className="cuadradoC"></div>
                        <div className="imagenC">
                            <img className="imgAuto" src="https://i.ibb.co/5rQ7QHM/Automotora.jpg" alt="ImagenAutomotora" />
                        </div>
                    </div>
           

                    <div className="contenidoC">
                        <p> En este proyecto(UNI) es sobre una aplicacion web hecha en NetBeans con el sistema de agregar, editar, eliminar y listar automoviles en conjunto con una base de datos en mysql con codigo en html, css y java.</p>
                    </div>

                </div>
            </a>

            <a target="_blank" href="https://github.com/Blvarez/Proyecto-Clinica" id="link">
                <div className="carta2">

                    <h2 className="tituloClinica">CLINICA WEB APP</h2>

                    <div className="cabezaC2">
                        <div className="cuadradoC2"></div>
                        <div className="imagenC2">
                            <img className="imgclinica" src="https://i.ibb.co/JsS8k1Z/imagen-2022-11-28-101240857.png" alt="ImagenAutomotora" />
                        </div>
                    </div>

                    <div className="contenidoC2">
                        <p> En este proyecto(universitario) es sobre una aplicacion Web para la manipulacion de Recetas, Medicamentos y Pacientes con sus respectivos atributos con el uso del Framework de React a traves de Next JS enlazado a una Base de Datos en MySql.</p>
                    </div>

                </div>
            </a>

        </section>

        <section id="seccion4">
            <h2 className="primerTituloCC">CONTACTAME</h2>

            <a target="_blank" href="https://www.instagram.com/brvnk0/">
                <img className="logoContactame instagram" src="https://cdn-icons-png.flaticon.com/512/3955/3955027.png" />
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/brankoalvarez/">
                <img className="logoContactame linkedin" src="https://cdn-icons-png.flaticon.com/512/3992/3992606.png" />
            </a>

            <a target="_blank" href="https://wa.link/4232si">
                <img className="logoContactame wsp" src="https://cdn-icons-png.flaticon.com/512/3992/3992601.png" />
            </a>
        </section>
    </Layout>
)


export default Index;