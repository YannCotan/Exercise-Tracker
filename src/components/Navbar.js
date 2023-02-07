import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const appFlex = {
    display: 'display:flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  }
        return (
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">ExcerTracker</Link>
            <div className="collapse navbar-collapse" Style={appFlex.display}>
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Exercices</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Enregister un exercice</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Créer un utilisateur</Link>
                    </li>
                </ul>
            </div>
          </nav>
        )
}

export default Navbar