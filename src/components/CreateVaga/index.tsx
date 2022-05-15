
import { useState } from "react";
import "./style.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

interface JobsData {
    id?: number,
    title: string;
    subtitle?: string;
    salary: string;
    address: string;
    enterprise: string
    description: string;
    created_at?: string;
  }


export function CreateVaga() {
    const [data,setData] = useState<JobsData>({
        title: "",
        salary: "",
        address: "",
        enterprise:"",
        description: ""
    })

    const navigate = useNavigate()
    
    async function enviarDados (event: React.SyntheticEvent) {
        event.preventDefault()
        console.log(data.title);
        
        const enviar = await axios.post("http://localhost:8000/vagas", {...data})
        
            navigate('/')
        
    }

    return (
        <div>
            
            <form  onSubmit={enviarDados}>
                <label htmlFor="title">Titulo</label>
                <input type="text" name="" id="title"  onChange={(e) => setData({...data, title: e.target.value})} value={data.title}/>

                <label htmlFor="salary">Salário</label>
                <input type="text" name="" id="salary" onChange={(e) => setData({...data, salary:e.target.value})} value={data.salary}/>

                <label htmlFor="address">Endereço</label>
                <input type="text" name="" id="address" onChange={(e) => setData({...data, address:e.target.value})} value={data.address}/>

                <label htmlFor="enterprise">Empresa</label>
                <input type="text" name="" id="enterprise" onChange={(e) => setData({...data, enterprise: e.target.value})} value={data.enterprise}/>

                <label htmlFor="description">Descrição</label>
                <input type="text" name="" id="description" onChange={(e) => setData({...data, description: e.target.value})} value={data.description}/>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}