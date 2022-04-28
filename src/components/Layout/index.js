import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import './index.scss';

export default function Layout() {
  return (
    <div className='app'>
      <Navbar />

      <div className='page'>
        <Outlet />
      </div>
    </div>
  );
}
