import React, { FC, HTMLAttributes, ReactChild } from 'react';
import styles from './Component.module.scss';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Component: FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children || `React Component Library Starter`}
    </div>
  );
};
