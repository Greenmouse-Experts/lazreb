import './App.css';
import { Route, Routes } from 'react-router';
import { Homepage } from './components/pages/Homepage';
import { About } from './components/pages/About';
import { Services } from './components/pages/Services';
import { Contact } from './components/pages/Contact';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Forget } from './components/pages/Forget';
import { EmailAuth } from './components/pages/EmailAuth';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/services" element={ <Services/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/forget" element={ <Forget/> } />
        <Route path="/for" element={ <EmailAuth/> } />
      </Routes>
    </div>
  );
}

export default App;
