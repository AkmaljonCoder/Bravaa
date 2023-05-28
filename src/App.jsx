import './App.css';

// Components

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Fields from './components/Fields/Fields';
import Opportunities from './components/Opportunities/Opportunities';
import Prices from './components/Prices/Prices';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Fields/>
      <Opportunities/>
      <Prices/>
      <Reviews/>
    </>
  );
}

export default App;
