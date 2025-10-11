import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { getNavigationRoutes } from './routes/Routes';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { AuthProvider } from './context/AuthContext'; 

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header onToggleCart={toggleCart} />
          <Routes>
            {getNavigationRoutes().map((route) => (
              <Route
                key={route.path}
                element={route.element}
                path={route.path}
              />
            ))}
          </Routes>
          <Cart isOpen={isCartOpen} onToggleCart={toggleCart} />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
