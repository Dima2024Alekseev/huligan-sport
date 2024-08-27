import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Boxing from './Pages/Directions/Boxing';
import Grappling from './Pages/Directions/Grappling';
import Hand from './Pages/Directions/Hand-To-Hand-Combat';
import Karate from './Pages/Directions/Karate';
import Kickboxing from './Pages/Directions/Kickboxing';
import Mma from './Pages/Directions/MMA';
import Women from './Pages/Directions/Womens-Self-Defense';
import Events from "./Pages/Events";
import Press from './Pages/Press-Center';
import PageContact from "./Pages/Page-Contact";
import Schedule from "./Pages/Schedule";
import Store from './Pages/Online-Store';
import Price from './Pages/Price';
import Registration from './Pages/Registration-Account';
import Authorization from './Pages/Account-Authorization';
import Waiting from './Pages/Waiting-List';
import "./style/config.css";
import "./style/home.css";
import logo_title from "./Components/img/log-club.png";
import useTitle from './Components/UseTitle';
import ScrollTop from './Components/ScrollTop';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={150}>
        <Routes location={location}>
          <Route path="/home" element={<Home />} />
          <Route path="/boxing" element={<Boxing />} />
          <Route path="/grappling" element={<Grappling />} />
          <Route path="/hand-to-hand-combat" element={<Hand />} />
          <Route path="/karate" element={<Karate />} />
          <Route path="/kickboxing" element={<Kickboxing />} />
          <Route path="/mma" element={<Mma />} />
          <Route path="/womens-self-defense" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/press-center" element={<Press />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/online-store" element={<Store />} />
          <Route path="/price" element={<Price />} />
          <Route path="/registration-account" element={<Registration />} />
          <Route path="/authorization-account" element={<Authorization />} />
          <Route path="/waiting-list" element={<Waiting />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default function App() {
  useTitle("Хулиган. Академия боевых единоборств", logo_title);

  return (
    <Router>
      <ScrollTop />
      <AnimatedRoutes />
    </Router>
  );
}
