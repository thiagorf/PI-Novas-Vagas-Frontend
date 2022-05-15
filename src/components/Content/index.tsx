import { useEffect, useState } from "react"
import axios from "axios";
import "./style.css"
import { ImPencil } from 'react-icons/im'
import { VscTrash } from 'react-icons/vsc'
import { useNavigate } from "react-router-dom";

interface JobsData {
    id: number,
    title: string;
    subtitle: string;
    salary: number;
    address: string;
    enterprise: string
    description: string;
    created_at: string;
  }
  

export function Content() {
    const [data, setData] = useState<JobsData[]>([])
    const navigate = useNavigate()
  useEffect(() => {
    async function pegarVagas() {
      const response = await axios.get("http://localhost:8000/vagas", {
        
        withCredentials: false,
      })

      setData(response.data)
    }

    pegarVagas()
  },[])

  function editar(id: number) {
    
    navigate(`/vagas/${id}`)
  }

  async function deletar(id: number){
    const response = await axios.delete(`http://localhost:8000/vagas/${id}`)
    const vagas = await axios.get("http://localhost:8000/vagas")
    setData(vagas.data)


    
  }

    return (
        <div className="content">
          {data.map(item => (
            <div className="content-card" key={item.id}>
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
              <div className="card-items">
                <span>
                {Intl.NumberFormat('pt-BR', 
                { style: 'currency', currency: 'BRL' })
                .format(item.salary)
                }
                </span>
                <span>{item.created_at}</span>
                <ImPencil onClick={() => editar(item.id)}/>
                <VscTrash onClick={() => deletar(item.id)}/>
              </div>
            </div>
          ))}
        </div>
    )
}