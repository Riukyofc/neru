import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { LangProvider } from './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import DiscordFAB from './components/DiscordFAB';
import Home from './pages/Home';
import Services from './pages/Services';
import FiveM from './pages/FiveM';
import AppsMobile from './pages/AppsMobile';
import SistemasWeb from './pages/SistemasWeb';
import About from './pages/About';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <LangProvider>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <CustomCursor />
      <BrowserRouter>
        <ScrollToTop />
        <VideoBackground />
        <div className="bg-noise"></div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />

            <Route path="/fivem" element={<FiveM />} />
            <Route path="/apps-mobile" element={<AppsMobile />} />
            <Route path="/sistemas-web" element={<SistemasWeb />} />
            <Route path="/sobre" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <DiscordFAB />
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;
