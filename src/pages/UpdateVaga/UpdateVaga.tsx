import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate, Navigate } from "react-router-dom";


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

function UpdateVaga(){
  const navigate = useNavigate();

    const [data, setData] = useState<JobsData>({
      title: "",
      salary: "",
      address: "",
      description: "",
      enterprise: ""
    })
  


    let { id } = useParams();
    useEffect(()=>{
        async function pegarVaga(){
            const response = await axios.get<JobsData>(`http://localhost:8000/vagas/${id}`)
        
           setData(response.data)
        }

        pegarVaga()
    },[])

    async function Atualizar(event: React.SyntheticEvent) {
      event.preventDefault();

      const enviar = await axios.put(`http://localhost:8000/vagas/${id}`, {...data})
    
        
      navigate('/')
    }

    return(
        
         <div className="content-card" key={id}>
         <form  onSubmit={Atualizar}>
                <label htmlFor="title">Titulo</label>
                <input type="text" name="" id="title"  onChange={(e) => setData({...data, title: e.target.value})} value={data.title}/>

                <label htmlFor="salary">Salário</label>
                <input type="text" name="" id="salary" onChange={(e) => setData({...data, salary: e.target.value})} value={data.salary}/>

                <label htmlFor="address">Endereço</label>
                <input type="text" name="" id="address" onChange={(e) => setData({...data, address: e.target.value})} value={data.address}/>

                <label htmlFor="enterprise">Empresa</label>
                <input type="text" name="" id="enterprise" onChange={(e) => setData({...data, enterprise: e.target.value})} value={data.enterprise}/>

                <label htmlFor="description">Descrição</label>
                <input type="text" name="" id="description" onChange={(e) => setData({...data, description: e.target.value})} value={data.description}/>

                <button type="submit">Enviar</button>
            </form>
       </div>
    )
}

export default UpdateVaga