import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Gallery.module.scss';
import Spinner from '../layout/Spinner';
import Picture from '../layout/Picture';
import MyButton from '../layout/MyButton/MyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faXmark,
  faRectangleVerticalHistory,
} from '@fortawesome/free-solid-svg-icons';

export default function Gallery() {
  const [sessions, setSessions] = useState([]);
  const [oneImage, setOneImage] = useState('');
  const [divHeight, setDivHeight] = useState(0);
  const [openSMGallery, setOpenSMGallery] = useState(false);
  const galleryRef = useRef();

  const location = useLocation();

  const openMenuGallery = () => {
    setOpenSMGallery(!openSMGallery);
  };

  const handleOneImageUrl = (imageUrl) => {
    setOneImage(imageUrl);
  };

  const handleCleaarOneImage = () => {
    setOneImage('');
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (galleryRef.current) setDivHeight(galleryRef.current.offsetHeight);
    });
    if (galleryRef?.current) observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, [galleryRef]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch('/api/gallery/');
        const data = await response.json();
        setSessions(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchSessions();
  }, []);

  useEffect(() => {
    if (sessions.length > 0) {
      const scroll = (id) => {
        const section = document.querySelector(`#${id}`);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      if (sessions.length > 0 && window.location.href.split('#').length === 2) {
        scroll(window.location.href.split('#')[1]);
      }
    }
  }, [sessions, divHeight, location]);

  return (
    <div
      ref={galleryRef}
      className={styles.gallery}
      style={{ paddingBottom: '3rem' }}
    >
      <div
        style={{
          position: 'sticky',
          top: '70px',
          marginTop: '0.5rem',
          marginBottom: '-1rem',
        }}
      >
        <button
          onClick={openMenuGallery}
          style={{
            display: 'lfex',
            color: 'var(--primary-color)',
            // backgroundColor: 'white',
            borderRadius: '1rem',
            // opacity: '0.5',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            boxShadow: 'none',
          }}
        >
          <FontAwesomeIcon icon={faCamera} size="2x" />
          {/* <FontAwesomeIcon icon={['fas', 'rectangle-vertical-history']} />
          <FontAwesomeIcon icon="fa-solid fa-rectangle-vertical-history" /> */}
          <p style={{ marginBottom: '0', marginTop: '-7px' }}>sessions</p>
        </button>
      </div>
      <div
        style={
          openSMGallery
            ? {
                display: 'flex',
                position: 'fixed',
                zIndex: '100',
                width: '100%',
                height: '100vh',
                left: '0',
                top: '0',
                justifyContent: 'flex-start',
              }
            : { display: 'none' }
        }
      >
        <div className={styles.sideMenuGallery}>
          <ul className={styles.menuSessionsList}>
            {sessions.map((el) => {
              if (el.title !== '') {
                return (
                  <li key={el.id} onClick={openMenuGallery}>
                    <Link to={`/gallery#${el.id}`}>{el.title}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className={styles.shadowSessions} onClick={openMenuGallery}>
          <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faXmark} />
        </div>
      </div>
      {sessions.length === 0 ? (
        <Spinner />
      ) : (
        sessions.map((session) => (
          <div key={session.id} id={session.id}>
            <h1 style={{ margin: '3rem 0' }}>{session.title}</h1>
            <div key={session.id} className={styles.galleryImagesBox}>
              {session.images?.map((image, ind) => {
                return [
                  <img
                    key={ind}
                    src={`/gallery/${session.id}/${image}`}
                    className={styles.galleryImage}
                    onClick={() =>
                      handleOneImageUrl(`/gallery/${session.id}/${image}`)
                    }
                  />,
                  oneImage.length > 0 && (
                    <Picture
                      key={session.id}
                      clearPicture={handleCleaarOneImage}
                      picture={oneImage}
                    />
                  ),
                ];
              })}
            </div>
            {session.last && (
              <Link to={session.link}>
                <MyButton borderColor="--gray-light" value="Book" />
              </Link>
            )}
          </div>
        ))
      )}
    </div>
  );
}
