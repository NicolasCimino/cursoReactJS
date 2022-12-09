import './App.css';
import NavBAR from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
      <NavBAR/>
      <Routes>
          <Route path='/' element={
            <div className="contenido">
              <ItemListContainer/>
            </div>} 
          />
          <Route path="/categoria/:categoria" element={
            <div className="contenido">
              <ItemListContainer/>
            </div>} 
          />
          <Route path="/Item/:IDproducto" element={<ItemDetailContainer/>} 
          />
          <Route path='*' element={<h1>Error! No se pudo hallar el elemento</h1>}/>
      </Routes>
      
      <Footer/>
   </BrowserRouter>
      
   </>
  );
}

export default App;
