import Navbar from './components/Navbar'; // Navbar remains here
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{ width: '100%'}} >
      {/* Common Navbar */}
      <Navbar />
      {/* Outlet for child routes */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;