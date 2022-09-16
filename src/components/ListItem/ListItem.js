import styles from './ListItem.module.scss';

export const ListItem = ({ children, className }) => {
  const classes = `${styles['list-item']} ${className || ''}`;

  return <li className={classes ? classes : null}>{children}</li>;
};
