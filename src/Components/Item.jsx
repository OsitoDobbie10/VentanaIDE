import styled from 'styled-components';
const Item = ({data,objeto,setObjeto,setView}) => {
    const {dataob,descpob,url} = data;
    const funcion = ()=>{
        setObjeto({
            ...objeto,
            dataob:dataob,
            descpob:descpob,
            url:url
        })};
  return (
    <Con onClick={funcion}>
    <span>{dataob}</span>
    </Con>
  )
}
const Con = styled.div`
width: 100%;
height: 50px;
border: 1px solid yellow;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    cursor: pointer;
    opacity: 0.6;
}
span{
    font-weight: bold;
    color: white;
    font-size: 23px;
}
`;
export default Item;
