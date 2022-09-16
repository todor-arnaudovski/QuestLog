import styles from './PageBackground.module.scss';

export const PageBackground = ({background}) => {
  return (
    <div
      className={`${styles['main-background']}`}
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
};
