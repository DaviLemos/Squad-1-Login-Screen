import Login from './Screens/Login';
import Home from './Screens/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ls from 'local-storage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const token = ls.get('token');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute auth={token} />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
