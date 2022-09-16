import styles from './PageContentWrapper.module.scss';

export const PageContentWrapper = ({ children }) => {
  return <div className={styles['page-content-wrapper']}>{children}</div>;
};
