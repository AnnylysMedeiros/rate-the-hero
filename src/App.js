import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { Header } from './common-components/Header/Header';


function App() {
  return (
    <>
    <NormalizeStyles />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="/" element={<Search />} />
        <Route path="+" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;