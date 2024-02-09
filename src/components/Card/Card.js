import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/cardsReducer';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = props => {

    const dispatch = useDispatch();
    const handleAddFavorite = event => {
        event.preventDefault();
        dispatch(toggleCardFavorite(props.id));
      }

    return (
        <li className={styles.card}>{props.title}
            <div onClick={handleAddFavorite}>
            <span><i className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i></span>
            </div>
        </li>
    );
};

export default Card