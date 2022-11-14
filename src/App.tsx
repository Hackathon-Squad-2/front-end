import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { InfoTrail } from './pages/InfoTrail';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register';

import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trails/:id" element={<InfoTrail />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/profile" element={<Profile />} />

        <Route element={<ProtectedRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
