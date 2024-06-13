import {createContext,useState} from 'react';
export const Stade = createContext();
const Global = ({children}) => {
  const [categoria1,setCategoria1] = useState(false);
  const [categoria2,setCategoria2] = useState(false);
  const [categoria3,setCategoria3] = useState(false);
  const [categoria4,setCategoria4] = useState(false);
  const ClickCat1 = ()=>{
    setCategoria1(!categoria1)
  }
  const ClickCat2 = ()=>{
    setCategoria2(!categoria2)
  }
  const ClickCat3 = ()=>{
    setCategoria3(!categoria3)
  }
  const ClickCat4 = ()=>{
    setCategoria4(!categoria4)
  }
  const [objeto,setObjeto] = useState({
    dataob:"",
    descpob:"",
    url:""
  });
  const [view,setView] = useState(true);
  return (
    <Stade.Provider value={{
      categoria1,
      ClickCat1,
      categoria2,
      ClickCat2,
      categoria3,
      ClickCat3,
      categoria4,
      ClickCat4,
      objeto,setObjeto,
      view,setView
    }}>
      {children}
    </Stade.Provider>
  ) 
}

export default Global;
