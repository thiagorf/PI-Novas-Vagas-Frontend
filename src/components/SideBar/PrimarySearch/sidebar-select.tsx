import { RiArrowDownSFill } from "react-icons/ri";
import { useToggle } from "../../../hooks";

export const SideBarSelect = () => {
    const { toggle, handleToggle } = useToggle();
    return (
        <div className="side-bar-select">
            <div className="side-bar-select-label" onClick={handleToggle}>
                <p>Selecione</p>
                <RiArrowDownSFill size={16} />
            </div>
            {toggle && (
                <div className="side-bar-select-items">
                    <div className="select-itens-group">
                        <p>Até R$ 1500,00</p>
                        <p>Até R$ 2500,00</p>
                        <p>Até R$ 3500,00</p>
                        <p>Até R$ 4500,00</p>
                        <p>Até R$ 5500,00</p>
                    </div>
                </div>
            )}
        </div>
    );
};
