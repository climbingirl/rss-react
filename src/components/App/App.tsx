import { Outlet } from 'react-router-dom';
import { AppContextProvider } from '../../context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <div className="app">
        <main className="main">
          <Outlet />
        </main>
      </div>
    </AppContextProvider>
  );
}

export default App;
