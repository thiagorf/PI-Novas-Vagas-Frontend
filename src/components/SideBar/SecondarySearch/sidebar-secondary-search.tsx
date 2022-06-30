import { useFormContext } from "react-hook-form";
import { BasicInput } from "../../Form/basic-input";
import { AddressQuery } from "../types";

export const SideBarSecondarySearch = () => {
    const { register } = useFormContext<AddressQuery>();

    return (
        <div className="sidebar-group">
            <h4>Localidade</h4>
            <div className="basic-input">
                <input type="text" placeholder="Cidade..." {...register("address")} />
            </div>
        </div>
    );
};
