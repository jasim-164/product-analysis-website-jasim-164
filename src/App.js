

import { Route, Routes,Link } from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound/NotFound'
import './App.css';

function App() {
 
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
