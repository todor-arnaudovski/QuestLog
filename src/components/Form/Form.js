import styles from './Form.module.scss';

export const Form = ({ children, className, onSubmit: onSubmitHandler }) => {
  const classNames = [styles.form, className].filter(Boolean).join(' ');

  return (
    <form onSubmit={onSubmitHandler} className={classNames}>
      {children}
    </form>
  );
};
