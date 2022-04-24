import { useState, useEffect } from 'react';
import styles from './Slideshow.module.scss';

// import '../../images1/3.jpg';
// import '../../images1/4.jpg';
// import '../../images1/5.jpg';
// // import { v4 as uuidv4 } from 'uuid';

export default function Slideshow() {
  const [counter, changeCounter] = useState(1);
  const [id, changeId] = useState(0);

  useEffect(() => {
    const picIndex = setInterval(() => {
      changeCounter((ind) => (ind === 6 ? 1 : ind + 1));
      changeId((id) => id + 1);
    }, 5000);

    return () => clearInterval(picIndex);
  }, []);

  return (
    <>
      <img src="/photo-iris-react/slides/1.jpg" alt="first-slide" />
      <div
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        <img
          key={id}
          className={styles.slide}
          src={`/slides/${counter}.jpg`}
          alt="first-slide"
        />
        <img
          key={id + 1}
          className={`${styles.slide} ${styles.second}`}
          src={`/slides/${counter === 6 ? 1 : counter + 1}.jpg`}
          alt="second-slide"
        />
      </div>
    </>
  );
}
