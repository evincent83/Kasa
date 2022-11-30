import { NavLink } from "react-router-dom";
import LogoKasa from '../img/logo.svg';

export default function Header() {
  return (
    <header>
      <img src={LogoKasa} alt="Logo Kasa"></img>
      <nav>
        <ul>
          <li>
            <NavLink style={({ isActive }) => (isActive ? {textDecoration: 'underline'} : {textDecoration: 'none'})} to="/" end>Accueil</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => (isActive ? {textDecoration: 'underline'} : {textDecoration: 'none'})} to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
