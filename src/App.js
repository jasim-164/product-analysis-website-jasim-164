import { Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews'
import Dashboard from './components/Dashboard/Dashboard'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'

import './App.css';
import Header from './components/Header/Header';

function App() {
 
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
