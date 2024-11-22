import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TransactionDashboard from './components/transaction/TransactionDashboard';

function App() {
  return (
   
   <BrowserRouter>
  
   <TransactionDashboard />
   
   
   </BrowserRouter>

  );
}

export default App;
