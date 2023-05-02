import logo from './logo.svg';
import './App.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages 
import Home from './pages/Home';


    function App() {
      return (
        <BrowserRouter>
          <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          </div>
        </BrowserRouter>
      );
    }

export default App;
