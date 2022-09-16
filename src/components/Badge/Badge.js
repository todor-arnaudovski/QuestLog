import styles from './Badge.module.scss';

export const Badge = ({ children, className, position, color }) => {
  let variantClass, positionClass;

  switch (color) {
    case 'warning':
      variantClass = 'warning';
      break;
    case 'success':
      variantClass = 'success';
      break;
    case 'danger':
      variantClass = 'danger';
      break;
    default:
      variantClass = 'warning';
      break;
  }

  switch (position) {
    case 'top-left':
      positionClass = 'top-left';
      break;
    case 'top-right':
      positionClass = 'top-right';
      break;
    case 'bottom-right':
      positionClass = 'bottom-right';
      break;
    case 'bottom-left':
      positionClass = 'bottom-left';
      break;
    default:
      positionClass = 'inline';
      break;
  }

  const classes = `${styles.badge} ${styles[variantClass]} ${
    styles[positionClass]
  } ${className ? className : ''}`;

  return <small className={classes}>{children}</small>;
};
