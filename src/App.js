// Packages
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';
// Project data
import data from './data';
// Components
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
// Stylesheet
import './style.scss';

export default function App() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const toggleDisplay = () => setDisplayMenu(prev => !prev);
  
  // Add a unique id (nanoid) to each element within the data array.
  const projectsData = data.map(project => ({ ...project, id: nanoid() }));

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
        <Route path='projects' element={<Projects projectsData={projectsData} />} />
        <Route path='contact' element={''} />
      </Route>
    </Routes>
  );
}