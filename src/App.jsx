import './App.css';

// Components

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Fields from './components/Fields/Fields';
import Opportunities from './components/Opportunities/Opportunities';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Fields/>
      <Opportunities/>
    </>
  );
}

export default App;
