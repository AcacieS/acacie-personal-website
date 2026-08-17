import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/main-page/MainPage';
import PortfolioPage from './components/portfolio-page/PortfolioPage';
import './App.css';

function App() {
    return (
        <BrowserRouter>
          <div className="app-container">
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/main/portfolio" element={<PortfolioPage />} />
            </Routes>
          </div>
        </BrowserRouter>
    );
}

export default App;