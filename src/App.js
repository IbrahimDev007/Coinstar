import React from 'react';
// import RegistrationView from './Function/RegistrationView';
// import Form from './Function/Form_validation';

// import Crud from './Function/CRUD';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinSummery from './Pages/CoinSummery';
import CoinDetails from './Pages/CoinDetails';
import Header from './Component/Header';
import { WatchlistProvider } from './Context/WatchlistContext';
function App() {
  return (
    <div >
     <Router>
       <WatchlistProvider>
		  <Header/>
				<Routes>
					<Route path="/" element={<CoinSummery />} />
					<Route path="/coinDetail" element={<CoinDetails />} />
				</Routes>
        </WatchlistProvider>
			</Router>
      {/* <Form/>
     <Crud/>
      <RegistrationView/> */}
    </div>
  );
}

export default App;
