import styles from './Input.module.scss';

export const Input = (props) => {
  const {
    required,
    id,
    type,
    placeholder,
    name,
    value,
    onChange: onChangeHandler,
    as: asElement = 'input',
    className,
    checked,
  } = props;
  const validElements = ['input', 'textarea'];
  const ValidInputElement = validElements.includes(asElement)
    ? asElement
    : 'input';

  const classNames = [styles.input, className].filter(Boolean).join(' ');

  return (
    <ValidInputElement
      required={required}
      id={id}
      type={type}
      checked={type === 'checkbox' ? checked : ''}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChangeHandler}
      className={classNames}
    />
  );
};
