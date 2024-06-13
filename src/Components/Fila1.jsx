import {objetivos,Item,UseGlobal} from '../index';
import styled from 'styled-components';
const Fila1 = () => {
  const {objeto,setObjeto,setView} =UseGlobal();
  return (
    <Container>
      {
        objetivos.map((data,index)=>{
        return <Item key={index} data={data} objeto={objeto} setObjeto={setObjeto}/>
        })
      } 
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;

`;
export default Fila1;
