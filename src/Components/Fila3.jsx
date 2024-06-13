import styled from "styled-components"
import {UseGlobal} from '../index'
const Fila3 = () => {
    const {objeto} = UseGlobal();
    const {dataob,url} = objeto;
  return (
    <Container>
    <div className="filaencabezado">
    <span>Paso1. Seleccione una galeria.</span>
    </div>
    <table className="TablaFila3">
    <tr>
    <td><span>NOMBRE</span></td>
    <td><span>ENLACE</span></td>
    </tr>
    <tr>
    <td><span>{dataob}</span></td>
    <td><a href={url}>Ver Galaeria</a></td>
    </tr>
    </table>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 250px;
display: flex;
flex-direction: column;
gap:10px;
.filaencabezado{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        font-size: 25px;
        font-weight: bold;
        color: white;
    }

}
.TablaFila3{
    width: 100%;
    height: 200px;
    tr,td{
        border: 1px solid yellow;
        text-align: center;
        font-weight: 900;
        color: white;
        text-decoration: none;
        font-size: 22px;
        &:hover{
            cursor: pointer;
        }
    }

}

`;
export default Fila3
