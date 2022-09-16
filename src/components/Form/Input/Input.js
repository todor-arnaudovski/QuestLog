import styles from './Input.module.scss';

export const Input = (props) => {
  const {
    id,
    type,
    placeholder,
    name,
    value,
    onChange: onChangeHandler,
    as: asElement = 'input',
    className,
  } = props;
  const validElements = ['input', 'textarea'];
  const ValidInputElement = validElements.includes(asElement)
    ? asElement
    : 'input';

  const classNames = [styles.input, className].filter(Boolean).join(' ');

  return (
    <ValidInputElement
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChangeHandler}
      className={classNames}
    />
  );
};
