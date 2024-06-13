import styled from 'styled-components'
const Header = () => {
  return (
    <Container>
    <h1>CATÁLOGO: 05 CATEGORÍAS, 12 Mapas Y 3 EXPERIENCIAS</h1>
    </Container>
  )
}
const Container = styled.header`
width: 100%;
height: 100%;
display: flex;
align-items: center;
h1{
    font-weight: bold;
    color:white;
}
`;

export default Header
