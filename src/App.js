import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';
import { AccomodationProvider } from './context/AccomodationContext';

function App() {
  return (
    <AccomodationProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/a-propos' element={<About />} />
          <Route path='/accomodation/:listingId' element={<Profile />} />
          <Route path='/error' element={<Page404 />} />
          <Route path='*' element={<Navigate to='/error' replace />} />
        </Routes>
        <Footer />
      </Router>
    </AccomodationProvider>
  );
}

export default App;
