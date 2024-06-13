import styled from "styled-components"

const FilaHome = ({titulo,descp}) => {
  return (
    <Container>
    <div className="HeaderFilaHOME">
    <h3>{titulo}</h3>
    </div>
    <div className="ContenidoFilaHome">
    <h2>{descp}</h2>
    </div>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
gap:10px;
.HeaderFilaHOME{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid yellow;
    h3{
        font-weight: bold;
        color: white;
    }}
.ContenidoFilaHome{
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid yellow;
    h2{
        font-weight: 900;
        color: white;
        text-align: center;
    }
}
`;
export default FilaHome
