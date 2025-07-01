import ShinyText from '../components/ShinyText';

function Navbar() {
  return (
    <nav>
      <h2>Michael Tampubolon</h2>
      <ul>
        <li><a href="#home"><ShinyText text="Home" speed={3} /></a></li>
        <li><a href="#about"><ShinyText text="About" speed={3} /></a></li>
        <li><a href="#skills"><ShinyText text="Skills" speed={3} /></a></li>
        <li><a href="#portfolio"><ShinyText text="Portofolio" speed={3} /></a></li>
        <li><a href="#contact"><ShinyText text="Contact" speed={3} /></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
