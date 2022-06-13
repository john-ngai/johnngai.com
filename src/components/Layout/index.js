import { Outlet } from 'react-router-dom';
import Header from '../Header'
import Navbar from '../Navbar';
import Footer from '../Footer';
import './index.scss';

export default function Layout(props) {
  const { toggleDisplay, hideDisplay, displayMenu} = props;
  
  return (
    <div className='app'>
      <Header
        toggleDisplay={toggleDisplay}
        hideDisplay={hideDisplay}
      />
      <Navbar
        toggleDisplay={toggleDisplay}
        displayMenu={displayMenu}
      />
      
      <div className="page">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}