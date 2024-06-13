import {supabase} from "../index";
import Swal from "sweetalert2";
export const InsertarUsuarios = async(p)=>{
    try {
        const {data} = await supabase.from("Clientes").insert(p).select();
        return data;
    } catch (error) {
        console.log(error);
    }
};
