import styles from './Filter.module.css';

export default function Filter({ onClick, children }) {
  return (
    <>
      <button className={styles.filter} onClick={onClick}>
        <h2>Filters</h2>
        <div className={styles.icon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {children}
    </>
  );
}
