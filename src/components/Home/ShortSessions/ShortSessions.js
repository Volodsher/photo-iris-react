import { useNavigate } from 'react-router-dom';
import MyButton from '../../MyButton/MyButton';
import styles from './ShortSessions.module.scss';
import one from '../../../images/shortGallery/Editar1.jpg';

export default function ShortSession() {
  const history = useNavigate();
  const handleCklick = () => history('/sessions');

  return (
    <div className={styles.shortSession}>
      <h1>Photo Sessions</h1>
      <p className="global-shortExplanation">
        I invite you to save every detail of your story, forever.
      </p>
      <p className="global-shortExplanation2">
        My camera is my magic wand that can immortalize the passage of time in a
        single click, looking with the heart.
      </p>
      <div className={styles.sessionGrid}>
        <div>
          <img
            src={one}
            className={styles.shortSessionImg}
            alt="one of short session"
          />
          <p className="global-shortExplanation2">THIS IS WHAT WE NEED</p>
        </div>
        <div style={{}}>
          <img
            src={one}
            className={styles.shortSessionImg}
            alt="one of short session"
          />
          <p className="global-shortExplanation2">THIS IS WHAT WE NEED</p>
        </div>
        <div style={{}}>
          <img
            src={one}
            className={styles.shortSessionImg}
            alt="one of short session"
          />
          <p className="global-shortExplanation2">THIS IS WHAT WE NEED</p>
        </div>
        <div style={{}}>
          <img
            src={one}
            className={styles.shortSessionImg}
            alt="one of short session"
          />
          <p className="global-shortExplanation2">THIS IS WHAT WE NEED</p>
        </div>
      </div>
      <MyButton
        className={styles.shortSessionButton}
        name="Sessions"
        handleCklick={handleCklick}
        borderColor="#f7f6f4"
      />
    </div>
  );
}
