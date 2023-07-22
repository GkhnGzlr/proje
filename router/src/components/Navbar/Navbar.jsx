import "./NavBar.scss"
const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="index.html" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="about.html" className="nav__link nav__link--active">
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="projects.html" className="nav__link">
              My Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="contact.html" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;