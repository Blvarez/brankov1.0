import Layout from "../components/Layout";


const Index = () =>
(


    <Layout>
        <section id="seccion1">
            <img className="imagenMia" src="data:image/jpeg;base64,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" alt="" />
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
                    momentos me encuentro con una gran disponibilidad para aprender y trabajar.
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