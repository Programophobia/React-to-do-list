
import styles from './Hero.module.scss';
<<<<<<< HEAD
import PageTitle from '../PageTitle/PageTitle';
=======
import PageTitle from '../PageTitle/PageTitle'
>>>>>>> 659d3454523a7c1948d618694961ae18927c92a1

const Hero = () => {
    return (
      <div className={styles.hero}>
        <PageTitle>My first React App</PageTitle>
        <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
      </div>
    );
  };

  export default Hero;