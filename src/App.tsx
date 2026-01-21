import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { ProductPage } from './pages/ProductPage';
import { VetPage } from './pages/VetPage';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/veterinary" element={<VetPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

