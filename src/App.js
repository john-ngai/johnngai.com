// Packages
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Components
import Layout from './components/Layout';
import Home from './components/Home';
// Stylesheet
import './style.scss';

export default function App() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const toggleDisplay = () => setDisplayMenu(prev => !prev);
  
  return (
    <Routes>
        <Route path='/'
          element={
            <Layout
              toggleDisplay={toggleDisplay}
              displayMenu={displayMenu}
            />
          }
        >
        <Route index element={<Home />} />
        <Route path='about' element={''} />
        <Route path='projects' element={''} />
        <Route path='contact' element={''} />
      </Route>
    </Routes>
  );
}