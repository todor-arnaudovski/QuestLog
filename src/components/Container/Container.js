import styles from './Container.module.scss';

export const Container = ({ children, className }) => {
  const classes = `${styles.container} ${className ? className : ''}`;

  return <div className={classes}>{children}</div>;
};
