import { useFormContext } from "react-hook-form";
import { RiArrowDownSFill } from "react-icons/ri";
import { useToggle } from "../../../hooks";
import { SalaryQuery } from "../types";

export const SideBarSelect = () => {
    const { toggle, handleToggle } = useToggle();

    const { register } = useFormContext<SalaryQuery>();

    return (
        <div className="sidebar-select">
            <select {...register("salary")}>
                <option value="">Selecione</option>
                <option value="1500">Até R$ 1500,00</option>
                <option value="2500">Até R$ 2500,00</option>
                <option value="3500">Até R$ 3500,00</option>
                <option value="4500">Até R$ 4500,00</option>
                <option value="5500">Até R$ 4500,00</option>
            </select>
        </div>
    );
};

/*
 {/* <div className="sidebar-select">
            <div className="sidebar-select-label" onClick={handleToggle}>
                <p>Selecione</p>
                <RiArrowDownSFill size={16} />
            </div>
            {toggle && (
                <div className="sidebar-select-items">
                    <div className="select-itens-group">
                        <p>Até R$ 1500,00</p>
                        <p>Até R$ 2500,00</p>
                        <p>Até R$ 3500,00</p>
                        <p>Até R$ 4500,00</p>
                        <p>Até R$ 5500,00</p>
                    </div>
                </div>
            )}
            </div>*/
