import styles from './PageContentWrapper.module.scss';

export const PageContentWrapper = ({ children, className }) => {
  const classNames = [styles['page-content-wrapper'], className].filter(Boolean).join(' ');

  return <div className={classNames}>{children}</div>;
};
