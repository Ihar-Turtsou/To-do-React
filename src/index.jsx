import React from 'react';
import ReactDOM from 'react-dom';
   //    (1) import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/screens/Home/Home'


// (1) const root = ReactDOM.createRoot(document.getElementById('root'));
//    root.render(
//    <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    document.getElementById('root')
)

