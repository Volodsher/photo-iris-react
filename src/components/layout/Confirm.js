import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeConfirm } from '../../features/confirmSlice';

function Confirm(props) {
  const { payload } = useSelector((store) => store.confirm);
  const dispatch = useDispatch();

  return (
    <aside className={styles.confirmContainer}>
      <div className={styles.confirm}>
        <h4>{props.title}</h4>
        <p>{payload}</p>
        <div className={styles.btnContainer}>
          <button
            type="button"
            className={`${styles.btn} ${styles.confirmBtn}`}
            onClick={() => {
              dispatch(props.action(payload));
              dispatch(closeConfirm());
            }}
          >
            Yes
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.cancelBtn}`}
            onClick={() => {
              dispatch(closeConfirm());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
}

Confirm.propTypes = {};

export default Confirm;
