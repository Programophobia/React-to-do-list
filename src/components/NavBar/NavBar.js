import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <nav className={styles.navigation}>
            <a href="/"><i className="fa fa-tasks"></i></a>
            <ul className={styles.menu}>
                <li><a href="/">HOME</a></li>
                <li><a href="/favorite">FAVORITE</a></li>
                <li><a href="/about">ABOUT</a></li>
            </ul>
        </nav>
    )
}


export default NavBar