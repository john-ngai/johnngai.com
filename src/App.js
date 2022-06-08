import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './style.scss';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={''} />
        <Route path='about' element={''} />
        <Route path='projects' element={''} />
        <Route path='contact' element={''} />
      </Route>
    </Routes>
  );
}