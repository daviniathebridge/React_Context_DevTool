import Provider from './app/Provider';
import ShowState from './pages/Showstate';
import ShowState2 from './pages/Showstate2';
import LogIn from './pages/Login';

const App = () => (
    <Provider>
      <LogIn />
      <ShowState />
      <ShowState2 />
    </Provider>
  );

export default App;