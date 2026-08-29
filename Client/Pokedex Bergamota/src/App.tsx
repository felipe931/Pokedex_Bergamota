mport { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './pages/PokemonList';


export default function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<PokemonList />} />
     </Routes>
   </BrowserRouter>
 );
}