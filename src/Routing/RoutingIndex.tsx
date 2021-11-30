import { BrowserRouter,Routes,Route, Router } from "react-router-dom";
import About from "../Utilities/AboutMe/AboutIndex";
import Context from "../Utilities/Contacts/ContextIndex";
import Home from "../Utilities/Home/HomeIndex";
import Project from "../Utilities/Projects/ProjectIndex";


const Routing=()=>{
    return(

        <div>
            <div>
                
            </div>

        
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Context />} />
            <Route path="/Project" element={<Project />} />
        </Routes>
        </BrowserRouter>



        </div>
    )
}

export default Routing