import { HashRouter, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout.jsx';
import Home from './pages/Home.jsx';
import Destinos from './pages/Destinos.jsx';
import Ofertas from './pages/Ofertas.jsx';
import Contato from './pages/Contato.jsx';
import NotFound from './pages/NotFound.jsx';

// HashRouter mantém a navegação funcionando até em hospedagens estáticas.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="destinos" element={<Destinos />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
