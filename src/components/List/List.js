import styles from './List.module.scss';

export const List = ({ children, className, variant, inline, center }) => {
  const isInline = inline ?? false;
  const isCenter = center ?? false;
  let isUnstyled;

  switch (variant) {
    case 'unstyled':
      isUnstyled = true;
      break;
    case 'styled':
      isUnstyled = false;
      break;
    default:
      isUnstyled = false;
      break;
  }

  const classNames = [
    styles.list,
    isUnstyled ? styles.unstyled : null,
    isInline ? styles.inline : null,
    isCenter ? styles.center : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <ul className={classNames}>{children}</ul>;
};
