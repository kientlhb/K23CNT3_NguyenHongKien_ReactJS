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
    <Routes>
      <Route path="/" element={<NhkHome />} />
      <Route path="/users" element={<NhkListUsers />} />
      <Route path="/create" element={<NhkCreateUser />} />
      <Route path="/edit/:id" element={<NhkEditUser />} />
    </Routes>
  </Router>
);

export default NhkApp;