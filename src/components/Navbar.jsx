import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          MyLearnCards
        </NavLink>

        <nav className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
