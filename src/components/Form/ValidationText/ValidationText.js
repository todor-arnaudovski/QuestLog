import styles from './ValidationText.module.scss';

export const ValidationText = ({ children, className, isShown }) => {
  const classNames = [styles['validation-text'], isShown ? styles.show : null, className]
    .filter(Boolean)
    .join(' ');

  return <span className={classNames}>{children}</span>;
};
