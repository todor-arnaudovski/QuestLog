import styles from './GridItem.module.scss';

export const GirdItem = ({ children, sm, md, lg, xl, xxl }) => {
  const breakpoints = [
    {
      name: 'sm',
      span: sm,
    },
    {
      name: 'md',
      span: md,
    },
    {
      name: 'lg',
      span: lg,
    },
    {
      name: 'xl',
      span: xl,
    },
    {
      name: 'xxl',
      span: xxl,
    },
  ];
  let breakpointsClass = '';

  for (const breakpoint of breakpoints) {
    if (breakpoint.span) {
      breakpointsClass += ' ' + styles[`${breakpoint.name}-${breakpoint.span}`];
    }
  }

  const gridItemClasses = `${styles[`grid-item`]}${breakpointsClass}`;

  return <div className={gridItemClasses}>{children}</div>;
};
