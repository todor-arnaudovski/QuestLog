import styles from './Button.module.scss';

export const Button = ({ children, className, type, variant }) => {
  let color;

  switch (variant) {
    case 'primary':
      color = variant;
      break;
    case 'danger':
      color = 'danger';
      break;
    case 'warning':
      color = 'warning';
      break;
    case 'success':
      color = 'success';
      break;
    default:
      color = 'primary';
  }

  // Filter out empty class names and joing existing class names
  const classNames = [styles.btn, styles[color], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type || null} className={classNames || null}>
      {children}
    </button>
  );
};
