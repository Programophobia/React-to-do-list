import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite, removeCard } from '../../redux/cardsReducer';
import { useDispatch } from 'react-redux';

const Card = props => {

    const dispatch = useDispatch();

    const handleAddFavorite = event => {
        event.preventDefault();
        dispatch(toggleCardFavorite(props.id));
      }
    const handleRemoveCard = event => {
        event.preventDefault();
        dispatch(removeCard(props.id));
    }

    return (
        <li className={styles.card}>{props.title}
            <div onClick={handleAddFavorite}>
                <span>
                    <i className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i>
                    <i onClick={handleRemoveCard} className="fa fa-trash"></i>
                </span>
            </div>
        </li>
    );
};

export default Card