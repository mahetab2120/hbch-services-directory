import './App.css';
import Logo from './components/logo';
import Navbar from './components/navbar';
import Biochemistry from './components/page/biochemistry';
import Cytopathology from './components/page/cytopathology';
import Haematopathology from './components/page/haematopathology';
import Microbiology from './components/page/microbiology';
import Molecular from './components/page/molecular';
import Pathology from './components/page/pathology';
import Transfusion from './components/page/transfusion';


import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div className="App">
      <Logo />
      <div className='text-center mt-4 text-xl text-white'>SERVICES DIRECTORY</div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Biochemistry />} />
        <Route path='/CYTOPATHOLOGY' element={<Cytopathology />} />
        <Route path='/HAEMATOPATHOLOGY' element={<Haematopathology />} />
        <Route path='/MICROBIOLOGY' element={<Microbiology />} />
        <Route path='/MOLECULAR-PATHOLOGY' element={<Molecular />} />
        <Route path='/PATHOLOGY' element={<Pathology />} />
        <Route path='/TRANSFUSION-MEDICINE' element={<Transfusion />} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;

