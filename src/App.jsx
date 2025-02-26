import productData from './data/full-products';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';

function App() {
  return (
    <div className="App">
      <h1>Hello There.</h1>
    </div>
      <Header />
      <Routes>
        <Route path="/" element={<CardList data={productData} />} />
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>   
  );
};