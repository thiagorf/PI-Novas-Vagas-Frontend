import { JobsData } from "../../types"

export const ContentItem = (job: JobsData) => {
    return (
        <div className="content-card">
            <h3>{job.title}</h3>
            <span>{job.subtitle}</span>
            <div className="card-items">
                <span>
                {Intl.NumberFormat('pt-BR', 
                { style: 'currency', currency: 'BRL' })
                .format(job.salary)
                }
                </span>
                <span>{job.created_at}</span>
              </div>
        </div>
    )
}