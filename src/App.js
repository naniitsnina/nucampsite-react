import Header from './components/Header';
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import { Routes, Route } from 'react-router-dom';
import CampsiteDirectoryPage from './pages/CampsiteDirectoryPage';
import Footer from './components/Footer'
import CampsiteDetailPage from './pages/CampsiteDetailPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='contact' element={<ContactPage/>}/>
        <Route path='directory' element={<CampsiteDirectoryPage/>} />        
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
