import { BrowserRouter, Routes, Route, } from "react-router-dom";
import CreateEnteprise from "../components/CreateEnterprise";
import { CreateVaga } from "../components/CreateVaga";
import Main from "../pages/Main";
import UpdateVaga from "../pages/UpdateVaga/UpdateVaga";

function Router (){

    return(
        <>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/criar-vaga" element={<CreateVaga/>}/>
                <Route path="/criar-empresa" element={<CreateEnteprise/>} />
                <Route path="/vagas/:id" element={<UpdateVaga/>}/>
            </Routes>
        </>
    )
}

export default Router