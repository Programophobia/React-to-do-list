import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle'
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
const Favorite = () => {

    const favoriteCards = useSelector(state => getFavoriteCards(state));
  
    return (
     <div className={styles.wrappper}>
        <PageTitle>Favorite</PageTitle>
      <div className={styles.favorite}><span><i className="fa fa-star-o"></i> MY FAVOURITE:</span>
          <ul className={styles.card}>
            {favoriteCards.map(card => <Card key={card.id} id={card.id} card={card} isFavorite={card.isFavorite} title={card.title} />)}
          </ul>
        </div>
      </div>
    );
  }

export default Favorite