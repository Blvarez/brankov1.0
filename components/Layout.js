import Navbar from "../components/Navbar";

const layout = ({children}) => 
(
    <>
    <Navbar/>

    {children}
    </>
)

export default layout;