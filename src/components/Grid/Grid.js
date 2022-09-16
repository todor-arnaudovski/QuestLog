import styles from './Grid.module.scss';

export const Grid = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};
