import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"

interface EmpData {
    id?: number,
    name: string;
    email?: string;
    cnpj: string;
    segment: string;
    cep: string
  }

function CreateEnteprise(){
    const [data,setData] = useState<EmpData>({
        name: "",
        email: "",
        cnpj: "",
        segment:"",
        cep: ""
    })

    const navigate = useNavigate()

    async function enviarDados (event: React.SyntheticEvent) {
        event.preventDefault()
        
        const enviar = await axios.post("http://localhost:8000/empresa", {...data})
        
            navigate('/')
        
    }

    return(
        <div>
            <form  onSubmit={enviarDados}>
                <label htmlFor="name">Nome</label>
                <input type="text" name="" id="nome"  onChange={(e) => setData({...data, name: e.target.value})} value={data.name}/>

                <label htmlFor="email">Email</label>
                <input type="text" name="" id="email" onChange={(e) => setData({...data, email:e.target.value})} value={data.email}/>

                <label htmlFor="cnpj">CNPJ</label>
                <input type="text" name="" id="cnpj" onChange={(e) => setData({...data, cnpj:e.target.value})} value={data.cnpj}/>

                <label htmlFor="segment">Segmento</label>
                <input type="text" name="" id="segment" onChange={(e) => setData({...data, segment: e.target.value})} value={data.segment}/>

                <label htmlFor="cep">CEP</label>
                <input type="text" name="" id="cep" onChange={(e) => setData({...data, cep: e.target.value})} value={data.cep}/>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default CreateEnteprise