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
// import Registration from './components/Registration/Registration';

const App = () => {
  const [sign, setSign] = useState('up');
  const [reg, setReg] = useState(false);

  return (
    <>
      <Navbar
      reg={reg}
      setReg={setReg}
      sign={sign}
      setSign={setSign}
      />
      <Registration
      reg={reg}
      setReg={setReg}
      sign={sign}
      setSign={setSign}
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