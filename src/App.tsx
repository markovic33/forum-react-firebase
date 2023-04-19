import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Aboute from './components/Aboute';
import Contact from './components/Contact';
import Forum from './pages/Forum/Forum';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/aboute' element={<Aboute />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/forum' element={<Forum />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
