import PageTitle from '../PageTitle/PageTitle'
import styles from './Error.module.scss'

const Error = () => {
    return (
        <div className={styles.error}>
            <PageTitle>404 page not found</PageTitle>
        </div>
    )  
}
export default Error