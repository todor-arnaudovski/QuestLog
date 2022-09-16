import styles from './InputGroup.module.scss'

export const InputGroup = ({ children, className }) => {
  const classNames = [styles['input-group'], className, 'bg-fade-light']
    .filter(Boolean)
    .join(' ');

  return <div className={classNames}>{children}</div>;
};
