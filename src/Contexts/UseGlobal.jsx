import {useContext} from 'react'
import { Stade } from './Global'
const UseGlobal = () => {
const use = useContext(Stade);
  return use;
}

export default UseGlobal;
