import styles from './Label.module.scss';

export const Label = ({ children, className, htmlFor, ariaLabel }) => {
  const classNames = [styles.label, className].filter(Boolean).join(' ');

  return (
    <label
      htmlFor={htmlFor}
      className={classNames}
      aria-label={`Enter ${ariaLabel}`}
    >
      {children}
    </label>
  );
};
