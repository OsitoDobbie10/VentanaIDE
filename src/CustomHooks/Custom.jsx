import {UseGlobal} from "../index"
import Swal from "sweetalert2";
const Custom = () => {
    const {Inicio,setInicio,campos,GetCampos} = UseGlobal;
    const {nombre,apellido,correo,mensaje} = campos;
    const sendMessage = (e)=>{
      e.preventDefault();
      const Telefono = "95348921"
      const url = `https://api.whatsapp.com/send?phone=504${Telefono}&text=
        *Asunto Consulta a cliente IDESGC*%0A
        *Secretaria de gobernacion y justicia centralizada*%0A%0A
        *Nombre de la persona que solicita informacion:*%0A
        ${nombre} ${apellido}%0A
        *Direccion de correo electrico:*%0A
        ${correo}%0A
         *Numero de telefono:*%0A
        ${correo}%0A
        *Mensaje indicado por la persona:*%0A
        ${mensaje}`;
        Swal.fire({
          position:"top-end",
          icon: "success",
          title: "Mensaje Enviado",
          showConfirmButton: false,
          timer: 2500,
        });
        window.open(url);
    }
    
  return {campos,GetCampos,sendMessage}
}

export default Custom;
