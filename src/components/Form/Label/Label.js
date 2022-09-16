import styles from './Label.module.scss';

export const Label = ({ className, htmlFor, label }) => {
  const classNames = [styles.label, className].filter(Boolean).join(' ');

  return (
    <label htmlFor={htmlFor} className={classNames}>
      {label}
    </label>
  );
};
