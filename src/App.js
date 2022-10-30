import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { Header } from './common-components/Header/Header';
import { configure } from 'axios-hooks';
import  Axios  from 'axios';


const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
});


configure({ axios });

export function App() {
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


// <Route path="/detalhes/:id" exact>
// <Details />
// </Route>
// <Route path="/" exact>
// <Search />
// </Route>
// <Route path="*">Página não encontrada</Route>