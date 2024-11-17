import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>

  );
}

export default App;
