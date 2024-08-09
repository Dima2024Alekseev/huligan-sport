import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./style/config.css";
import "./style/home.css";
import Home from "./Home";
import About from "./About";
import Events from "./Events";
import Press from './Press-Center';
import PageContact from "./Page-Contact";
import Schedule from "./Schedule";
import Store from './Online-Store';
import Price from './Price';
import Account from './Personal-Account';
import logo_title from "./Components/img/log-club.png"
import useTitle from './Components/UseTitle';


export default function App() {
  useTitle("Главная", logo_title)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/precc-center" element={<Press/>}/>
          <Route path="/contact" element={<PageContact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/online-store" element={<Store />} />
          <Route path="/price" element={<Price />} />
          <Route path="/personal-account" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

