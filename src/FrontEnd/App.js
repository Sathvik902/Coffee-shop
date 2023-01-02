import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header'
import Mainpage from './MainPage/Mainpage';
import Contact from './Contact/Contact'
import Booking from './Booking/Booking'
import Menu from './Menu/Menu'
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/"  element = {<Mainpage/>}/>
      <Route path="/Menu" element = {<Menu/>}/>
      <Route path="/Contact" element = {<Contact/>}/>
      <Route path="/Booking" element = {<Booking/>}/>
      {/* <Route path="/"  element = {<Home/>}/>
      <Route path="*"  element = {<Error/>}/>  */}
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
