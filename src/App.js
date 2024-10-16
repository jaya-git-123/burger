// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Recipe from './components/Recipe'
// import Popular from './components/Popular'
// import Delivery from './components/Delivery'
// import Contact from './components/Contact'

// export default function App() {
//   return (
//     <div className="App">
//        <Router>
//       <div className="app">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/recipe" element={<Recipe />} />
//           <Route path="/popular" element={<Popular />} />
//           <Route path="/delivery" element={<Delivery />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
      
//     </div>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Recipe from './pages/Recipe'
// import Popular from './pages/Popular'
// import Delivery from './pages/Delivery'
// import Contact from './pages/Contact'
// import './App.css'

// export default function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/recipe" element={<Recipe />} />
//           <Route path="/popular" element={<Popular />} />
//           <Route path="/delivery" element={<Delivery />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }


// import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Popular  from './components/Popular';
import Delivery from './components/Delivery';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Recipe />
      <Popular />
      <Delivery />
      <Contact />

    </div>
  );
}

export default App;