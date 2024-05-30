import { useEffect, useState } from 'react';
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
import Popup from './components/popup';


import { BrowserRouter as Router,Route,Routes, useNavigate, Navigate } from 'react-router-dom';


function App() {

  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [tabName, setTabName] = useState(null);
  const openPopup = (testData, tabname) => {
    setTabName(tabname);
    setSelectedTest(testData);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const pathFun = (url) =>{
    console.log(url)
  }
  return (
      
        <div className="App relative">
      {isOpen&&<Popup onClose={closePopup} testData={selectedTest} tabname={tabName} />}
      <div className='absolute z-10 w-full'><Logo />
      <div className='text-center mt-4 text-xl  text-white '>SERVICES DIRECTORY</div>
      <Navbar navPath={pathFun} />
      <Routes>
        <Route path='/' element={<Biochemistry onOpen={openPopup} />} />
        <Route path='/CYTOPATHOLOGY' element={<Cytopathology onOpen={openPopup} />} />
        <Route path='/HAEMATOPATHOLOGY' element={<Haematopathology onOpen={openPopup} />} />
        <Route path='/MICROBIOLOGY' element={<Microbiology onOpen={openPopup} />} />
        <Route path='/MOLECULAR-PATHOLOGY' element={<Molecular onOpen={openPopup} />} />
        <Route path='/PATHOLOGY' element={<Pathology onOpen={openPopup} />} />
        <Route path='/TRANSFUSION-MEDICINE' element={<Transfusion onOpen={openPopup} />} />
        {/* Redirect any unknown routes to the main page */}
        <Route path='*' element={<Navigate to="/" />} />

      </Routes>
      </div>
    </div>
    
  );
}

export default App;

// import { useState } from 'react';
// import './App.css';
// import Logo from './components/logo';
// import Navbar from './components/navbar';
// import Biochemistry from './components/page/biochemistry';
// import Cytopathology from './components/page/cytopathology';
// import Haematopathology from './components/page/haematopathology';
// import Microbiology from './components/page/microbiology';
// import Molecular from './components/page/molecular';
// import Pathology from './components/page/pathology';
// import Transfusion from './components/page/transfusion';
// import Popup from './components/popup';

// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// function AppContent() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedTest, setSelectedTest] = useState(null);
//   const [tabName, setTabName] = useState(null);
//   const location = useLocation();

//   const openPopup = (testData, tabname) => {
//     setTabName(tabname);
//     setSelectedTest(testData);
//     setIsOpen(true);
//   };

//   const closePopup = () => {
//     setIsOpen(false);
//   };

//   const pathFun = (url) => {
//     console.log(url);
//   };

//   return (
//     <div className="App relative">
//       {isOpen && <Popup onClose={closePopup} testData={selectedTest} tabname={tabName} />}
//       <div className='absolute z-10 w-full'>
//         <Logo />
//         <div className='text-center mt-4 text-xl text-white'>SERVICES DIRECTORY</div>
//         <Navbar navPath={pathFun} />
//         <Routes>
//           <Route path={location.pathname} element={<Biochemistry onOpen={openPopup} />} />
//           <Route path={location.pathname} element={<Cytopathology onOpen={openPopup} />} />
//           <Route path={location.pathname} element={<Haematopathology onOpen={openPopup} />} />
//           <Route path={location.pathname} element={<Microbiology onOpen={openPopup} />} />
//           <Route path={location.pathname} element={<Molecular onOpen={openPopup} />} />
//           <Route path={location.pathname} element={<Pathology onOpen={openPopup} />} />
//           <Route path={location.pathname} element={<Transfusion onOpen={openPopup} />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
