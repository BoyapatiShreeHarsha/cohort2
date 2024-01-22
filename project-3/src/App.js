import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page1 from './pages/page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Page1/>}/>
    <Route exact path='/second' element={<Page2/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
