import { useState, useEffect } from 'react';
import styles from './Slideshow.module.scss';

let imgs = [
  '/photo-iris-react/slides/1.jpg',
  '/photo-iris-react/slides/2.jpg',
  '/photo-iris-react/slides/3.jpg',
  '/photo-iris-react/slides/4.jpg',
  '/photo-iris-react/slides/5.jpg',
  '/photo-iris-react/slides/6.jpg',
];

export default function Slideshow() {
  const [counter, changeCounter] = useState(0);
  const [id, changeId] = useState(0);

  useEffect(() => {
    const picIndex = setInterval(() => {
      changeCounter((ind) => (ind === 5 ? 0 : ind + 1));
      changeId((id) => id + 1);
    }, 5000);

    return () => clearInterval(picIndex);
  }, []);

  return (
    <>
      <div
        className={styles.slideShow}
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        <img
          key={id}
          className={styles.slide}
          src={imgs[counter]}
          alt="first-slide"
        />
        <img
          key={id + 1}
          className={`${styles.slide} ${styles.second}`}
          src={imgs[counter === 5 ? 0 : counter + 1]}
          alt="second-slide"
        />
      </div>
    </>
  );
}
