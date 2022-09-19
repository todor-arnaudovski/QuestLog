import styles from './Frame.module.scss';
import mainBackground from 'assets/images/backgrounds/frame-main.jpg';
import borderBackground from './images/border.jpg';
import cornerBackground from './images/corner.jpg';

const Corners = () => {
  const corners = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

  return (
    <>
      {corners.map((corner, i) => {
        return (
          <span
            key={i}
            className={`${styles.corner} ${styles[`${corner}`]}`}
            style={{
              backgroundImage: `url(${cornerBackground})`,
            }}
          />
        );
      })}
    </>
  );
};

export const Frame = ({ children, className, style }) => {
  const classesNames = [styles.frame, className].filter(Boolean).join(' ');

  return (
    <div
      style={{
        backgroundImage: `url(${mainBackground})`,
        borderImage: `url(${borderBackground}) 60 round`,
        ...style,
      }}
      className={classesNames || null}
    >
      <Corners />
      {children}
    </div>
  );
};
