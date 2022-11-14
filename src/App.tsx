import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { InfoTrail } from './pages/InfoTrail';
import { Login } from './pages/Login';

import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trails/:id" element={<InfoTrail />} />
        <Route element={<ProtectedRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
