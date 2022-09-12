import 'bootstrap/dist/css/bootstrap.min.css';
import  'antd/dist/antd.css';
import Product from './components/Product';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Content/>} />
        <Route path="/edit" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;