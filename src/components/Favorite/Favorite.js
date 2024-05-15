import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle'
<<<<<<< HEAD

const Favorite = () => {
    return (
        <section>
            <container>
                <PageTitle>favorite</PageTitle>
                <div>lalala</div>
            </container>
        </section>
    )  
}

export default Favorite
=======
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsReducer';

const Favorite = () => {

    const favoriteCards = useSelector(state => getFavoriteCards(state));
  
    return (
     <div className={styles.wrappper}>
        <PageTitle>Favorite</PageTitle>
      <div className={styles.favorite}><span>MY FAVOURITE:</span>
          <ul className={styles.card}>
            {favoriteCards.map(card => <Card key={card.id} id={card.id} card={card} isFavorite={card.isFavorite} title={card.title} />)}
          </ul>
        </div>
      </div>
    );
  }
  export default Favorite
>>>>>>> 659d3454523a7c1948d618694961ae18927c92a1
