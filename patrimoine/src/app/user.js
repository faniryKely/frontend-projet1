import{react} from 'react'
import styles from './user.css'

const HomePage = () => {
    return (
        <div className={styles.container}>
        <h1 className={styles.pat}>patrimoine</h1> 
        <input type="text" placeholder="entrer un user" />

        
        <div className={styles.checkboxContainer}>
          <label>
            <input type="checkbox" /> Agregat
          </label>
          <label>
            <input type="checkbox" /> Immobilisations
          </label>
          <label>
            <input type="checkbox" /> Trésorerie
          </label>
          <label>
            <input type="checkbox" /> Obligations
          </label>
        </div>
      </div>
    );
  };
  export default HomePage;
  