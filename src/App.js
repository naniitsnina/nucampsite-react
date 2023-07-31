import Header from './components/Header';
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import { Routes, Route } from 'react-router-dom';
import CampsiteDirectoryPage from './pages/CampsiteDirectoryPage';
import Footer from './components/Footer'
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampsites())
    dispatch(fetchPartners())
  }, [dispatch])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsiteDirectoryPage />} />
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />
        <Route path='about' element={<AboutPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
