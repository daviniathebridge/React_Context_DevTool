import { useContext } from 'react';
import { useMyContext} from '../app/Provider';

const Showstate = () => {
  const [state, setState] = useMyContext();
  return ( <p>{state.name}</p> );
}

export default Showstate;
