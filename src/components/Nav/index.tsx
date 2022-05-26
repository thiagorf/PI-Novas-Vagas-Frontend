import { BiChevronDown } from "react-icons/bi"
import "./style.css"

export function Nav() {

    return (
        <div className="nav">
          <input type="text"  placeholder="Pesquise..."/>
          <div className="nav-category-item">
            <span>Empresas</span>
            <span>
            <BiChevronDown size={16} className="icon-a"/>
            </span>
          </div>
          <div className="nav-category-item">
            <span>Salário</span>
            <span>
            <BiChevronDown size={16} className="icon-a"/>
            </span>
          </div>
          <div className="nav-category-item">
            <span>Postada em</span>
            <span>
            <BiChevronDown size={16} className="icon-a"/>
            </span>
          </div>
          <div className="nav-category-item">
            <span>Local</span>
            <span>
            <BiChevronDown size={16} className="icon-a"/>
            </span>
          </div>
          <div>
            anuncio
          </div>
        </div>
    )
}