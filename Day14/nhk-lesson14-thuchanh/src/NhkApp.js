import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NhkNavBar from './components/NhkNavBar';
import NhkHome from './components/NhkHome';
import NhkListUsers from './components/NhkListUsers';
import NhkCreateUser from './components/NhkCreateUser';
import NhkEditUser from './components/NhkEditUser';
import './styles.css';

const NhkApp = () => (
  <Router>
    <NhkNavBar />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<NhkHome />} />
        <Route path="/users" element={<NhkListUsers />} />
        <Route path="/create" element={<NhkCreateUser />} />
        <Route path="/edit/:id" element={<NhkEditUser />} />
        <Route path="/DSUsers" element={<NhkListUsers />} /> 
        <Route path="/TMUsers" element={<NhkEditUser />} />
      </Routes>
    </div>
    <footer className="bg-dark text-white text-center p-3 mt-4">
      <p>&copy; 2025 GOOD AND JOY.</p>
    </footer>
  </Router>
);

export default NhkApp;
