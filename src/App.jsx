import './App.css';
import { useState } from 'react';

// Components

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Fields from './components/Fields/Fields';
import Opportunities from './components/Opportunities/Opportunities';
import Prices from './components/Prices/Prices';
import Reviews from './components/Reviews/Reviews';
import Submit from './components/Submit/Submit';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/Registration';

function App() {
  const [openReg, setOpenReg] = useState(false);

  return (
    <>
      <Navbar
      openReg={openReg}
      setOpenReg={setOpenReg}
      />
      <Registration
      openReg={openReg}
      setOpenReg={setOpenReg}
      />
      <Header/>
      <Fields/>
      <Opportunities/>
      <Prices/>
      <Reviews/>
      <Submit/>
      <Footer/>
    </>
  );
}

export default App;
