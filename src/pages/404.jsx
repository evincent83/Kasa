import { NavLink } from "react-router-dom";

export default function Error404 () {
    return (
        <div id="div404">
            <p id="error404">404</p>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <NavLink id="navBack" to="/Kasa">Retourner sur la page d’accueil</NavLink>
        </div>
    )
}