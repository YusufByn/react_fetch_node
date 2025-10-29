import { NavLink } from 'react-router-dom'
import './HeaderNav.css'

function HeaderNav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Tableau</NavLink>
                </li>
                <li>
                    <NavLink to="/add-data">Ajouter des données</NavLink>
                </li>
                <li>
                    <NavLink to="/pairOrNot">Pair ou Impair</NavLink>
                </li>
                <li>
                    <NavLink to="/countLength">Compter la longueur</NavLink>
                </li>
                <li>
                    <NavLink to="/addNumbers">Add Numbers</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav

