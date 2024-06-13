import {styled} from 'styled-components'
import {Header,Fila1,Fila3,FilaHome,UseGlobal} from './index'
import { useEffect } from 'react';
import Swal from "sweetalert2";
import IDE from "./assets/IDE SGC.png"
function App() {
  const {view,setView} = UseGlobal();
  const ver = ()=>{
    setView(!view);
  }
  useEffect(()=>{
    window.addEventListener("load",()=>{
      Swal.fire({
        title: "IDESGC",
        text: "Catalogo de mapas de IDESGC",
        imageUrl:IDE,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
    })
  },[])

  return (
    <Container>
    <div className="header">
    <Header/>
    </div>
    <div className="contenedor">
    <div className="fila1">
    <div className="categoria" onClick={ver}>
    <h2>Categorias</h2>
    </div>
    <Fila1/>
    </div>
    <div className="fila2">
    {
      view ? <FilaHome titulo="PASO 2. SELECCIONE UNA GALERÍA" 
                       descp="DEBE SELECCIONAR UNA CATEGORÍA PARA VER LA LISTA DE GALERÍAS."/> : <Fila3/>
    }
    <FilaHome titulo="PASO 2. SELECCIONE UN TIPO DE DISPOSITIVO" 
              descp="DEBE SELECCIONAR UNA GALERÍA PRA VER LOS TIPOS DE DISPOSITIVOS DISPONIBLES."/>
    <FilaHome titulo="PASO 3. SELECCIONE UNA EXPERIENCIA"
              descp="DEBE SELECCIONAR UNA GALERÍA PARA VER LA LISTA DE EXPERIENCIAS."/>
    
    </div>
    </div>
    </Container>
  )
}
const Container = styled.section`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
gap:10px;
background-color:rgba(8, 193, 203, 0.6); 
.header{
  width: 100%;
  height: 100px;
  border: 2px solid yellow;
}
.contenedor{
  width: 100%;
  height: 800px;
  display: flex;
  gap: 10px;
  .fila1{
    width: 30%;
    height: 100%;
    border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    .categoria{
      text-align: center;
      font-weight: bold;
      color: yellow;
      &:hover{
        cursor: pointer;
      }
    }

  }
  .fila2{
    width: 70%;
    height: 100%;
    border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    gap:10px;
  }
}
`
export default App
