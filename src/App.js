import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./style/config.css";
import "./style/style.css";
import Home from "./Home";
import About from "./About";
import Events from "./Events";
import Page_Contact from "./Page-Contact";
import Schedule from "./Schedule";
import Price from './Price';
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
          <Route path="/contact" element={<Page_Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/price" element={<Price />} />
        </Routes>
      </Router>
    </>
  );
}

