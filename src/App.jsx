import './App.css';

// Components

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Fields from './components/Fields/Fields';
import Opportunities from './components/Opportunities/Opportunities';
import Prices from './components/Prices/Prices';
import Reviews from './components/Reviews/Reviews';
import Submit from './components/Submit/Submit';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Fields/>
      <Opportunities/>
      <Prices/>
      <Reviews/>
      <Submit/>
    </>
  );
}

export default App;
