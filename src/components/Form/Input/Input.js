import { forwardRef } from 'react';
import styles from './Input.module.scss';

export const Input = forwardRef((props, ref) => {
  const { id, type, placeholder, name, value, checked, className } = props;
  const {
    as: asElement = 'input',
    onChange: onChangeHandler,
    onBlur: onBlurHandler,
  } = props;
  const validElements = ['input', 'textarea'];
  const ValidInputElement = validElements.includes(asElement) ? asElement : 'input';

  const classNames = [styles.input, className].filter(Boolean).join(' ');

  return (
    <ValidInputElement
      id={id}
      type={type}
      checked={type === 'checkbox' ? checked : ''}
      placeholder={placeholder}
      name={name}
      value={value}
      ref={ref}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      className={classNames}
    />
  );
});
