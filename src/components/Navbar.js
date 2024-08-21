import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Quevedo Recetas</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/recipes">Recetas</Link></li>
        {user && <li><Link to="/add-recipe">Añadir Receta</Link></li>}
        <li><Link to="/about">Acerca de</Link></li>
        {user ? (
          <>
            <li><span className="user-greeting">Hola, {user.username}</span></li>
            <li><button onClick={logout}>Cerrar Sesión</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;