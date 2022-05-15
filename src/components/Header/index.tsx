import { useNavigate } from "react-router-dom"
import "./style.css"



export function Header() {
    const navigate = useNavigate()
    function naviToVagas(){
        navigate('/criar-vaga')
    }

    function naviToEmpresa(){
        navigate('/criar-empresa')
    }

    return (
        <div className="header">
            <h1>Novas Vagas</h1>
            <div className="buttons">
                <button onClick={naviToEmpresa}>  Cadastrar Empresa</button>
                <button onClick={naviToVagas}>  Cadastrar Vaga</button>
            </div>
        </div>
    )
}