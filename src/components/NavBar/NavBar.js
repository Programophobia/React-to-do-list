import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navigation}>
            <a href="/"><i className="fa fa-tasks"></i></a>
            <ul className={styles.menu}>
                <li><NavLink className={({isActive }) => isActive ? styles.linkActive : undefined} to="/">HOME</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/favorite">FAVORITE</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">ABOUT</NavLink></li>
            </ul>
        </nav>
    )
}


export default NavBar