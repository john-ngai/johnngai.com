import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import './style.scss';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={''} />
        <Route path='projects' element={''} />
        <Route path='contact' element={''} />
      </Route>
    </Routes>
  );
}