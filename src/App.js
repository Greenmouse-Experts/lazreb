import './App.css';
import { Route, Routes } from 'react-router';
import { Homepage } from './components/pages/Homepage';
import { About } from './components/pages/About';
import { Services } from './components/pages/Services';
import { Contact } from './components/pages/Contact';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Forget } from './components/pages/Forget';
// import { EmailAuth } from './components/pages/EmailAuth';
import ScrollToTop from './components/assets/ScrollTop';
import { Blog } from './components/pages/Blog';
import { Faqs } from './components/pages/Faqs';
import { Terms } from './components/pages/Terms';
import { Privacy } from './components/pages/Privacy';
import { BusDetails } from './components/pages/BusDetails';
import { EmailVeryfy } from './components/pages/EmailVerify';

function App() {
  return (
    <div className="">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/services" element={ <Services/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/faqs" element={ <Faqs/> } />
        <Route path="/terms" element={ <Terms/> } />
        <Route path="/privacy" element={ <Privacy/> } />
        <Route path="/bustype" element={ <BusDetails/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/forget" element={ <Forget/> } />
        <Route path="/for" element={ <EmailVeryfy/> } />
      </Routes>
    </div>
  );
}

export default App;
