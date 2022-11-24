import './App.css';
import { Route, Routes } from 'react-router';
import { Homepage } from './components/pages/Homepage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={ <Homepage/> } />
      </Routes>
    </div>
  );
}

export default App;
