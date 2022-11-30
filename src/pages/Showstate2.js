import { useContext } from 'react';
import { useMyContext} from '../app/Provider';

const Showstate2 = () => {
  const [state, setState] = useMyContext();
  return ( <h1>{state.name}</h1> );
}

export default Showstate2;