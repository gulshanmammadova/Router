import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar1'
import {Route,  Routes} from 'react-router-dom'
import Team from './pages/Team';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/contacts" element={<ContactsPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    
    </Routes>
    </div>
  );
}

export default App;
