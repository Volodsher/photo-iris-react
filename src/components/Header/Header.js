import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import logo from '../../logo-iris-photo.png';

function Header(props) {
  let activeStyle = {
    color: '#E98074',
  };
  return (
    <div className={styles.header}>
      <div className={styles.toCenterLogo} />
      <ul className={`${styles.menuList} ${styles.menuListFirst}`}>
        <li key="1">
          <NavLink
            to="/photo-iris-react/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
          >
            Home
          </NavLink>
        </li>
        <li key="2">
          <NavLink
            to="/photo-iris-react/blog"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
          >
            Blog
          </NavLink>
        </li>
        <li key="3">
          <NavLink
            to="/photo-iris-react/sessions"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
          >
            Sessions
          </NavLink>
        </li>
      </ul>
      <img src={logo} className={styles.logo} alt="logo" />
      <ul className={`${styles.menuList} ${styles.menuListSecond}`}>
        <li key="4">
          <NavLink
            to="/photo-iris-react/gallery"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
          >
            Gallery
          </NavLink>
        </li>
        <li key="5">
          <NavLink
            to="/photo-iris-react/inspiration"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
          >
            Inspiration
          </NavLink>
        </li>
        <li key="6">
          <NavLink
            to="/photo-iris-react/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <HamburgerButton
        menuOpen={props.menuOpen}
        changeMenuStatus={props.changeMenuStatus}
      />
      <div
        className={
          props.menuOpen
            ? `${styles.sideMenu} ${styles.sideMenuOpen}`
            : styles.sideMenu
        }
      >
        <ul className={styles.menuList}>
          <li key="1" onClick={props.changeMenuStatus}>
            <NavLink to="/photo-iris-react/">Home</NavLink>
          </li>
          <li key="2" onClick={props.changeMenuStatus}>
            <NavLink to="/photo-iris-react/blog">Blog</NavLink>
          </li>
          <li key="3" onClick={props.changeMenuStatus}>
            <NavLink to="/photo-iris-react/sessions">Sessions</NavLink>
          </li>
          <li key="4" onClick={props.changeMenuStatus}>
            <NavLink to="/photo-iris-react/gallery">Gallery</NavLink>
          </li>
          <li key="5" onClick={props.changeMenuStatus}>
            <NavLink to="/photo-iris-react/inspiration">Inspiration</NavLink>
          </li>
          <li key="6" onClick={props.changeMenuStatus}>
            <NavLink to="/photo-iris-react/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div
        className={
          props.menuOpen
            ? `${styles.shadow} ${styles.shadowOpen}`
            : styles.shadow
        }
        onClick={props.changeMenuStatus}
      />
    </div>
  );
}

export default Header;

Header.propTypes = {
  menuOpen: PropTypes.bool,
  changeMenuStatus: PropTypes.func,
};
