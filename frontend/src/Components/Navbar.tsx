import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Cars } from '../Pages/Cars';
import { Drivers } from '../Pages/Drivers';
import { Feedback } from '../Pages/Feedback';
import { District } from '../Pages/District';

export const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/cars">Cars</Link></li>
          <li><Link to="/drivers"> Drivers</Link></li>
          <li><Link to="/feedback"> Feedback </Link></li>
          <li><Link to="/district"> District </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/district" element={<District />} />
      </Routes>
    </Router>
  )
}
