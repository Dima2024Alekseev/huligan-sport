import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Events from "./Events";
import Page_Contact from "./Page-Contact";
import Schedule from "./Schedule";
import Price from './Price';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/qqqwww" element={<Home />} />
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

