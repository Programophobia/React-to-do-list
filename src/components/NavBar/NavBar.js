<<<<<<< HEAD
import styles from './NavBar.module.scss'
=======
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
>>>>>>> 659d3454523a7c1948d618694961ae18927c92a1

const NavBar = () => {
    return (
        <nav className={styles.navigation}>
            <a href="/"><i className="fa fa-tasks"></i></a>
            <ul className={styles.menu}>
<<<<<<< HEAD
                <li><a href="/">HOME</a></li>
                <li><a href="/favorite">FAVORITE</a></li>
                <li><a href="/about">ABOUT</a></li>
=======
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">HOME</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">FAVORITE</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">ABOUT</NavLink></li>
>>>>>>> 659d3454523a7c1948d618694961ae18927c92a1
            </ul>
        </nav>
    )
}


export default NavBar