import React, { useEffect } from 'react';
import styles from './ThemeList.module.css'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxhooks';
import { getAllThemes } from '@/entities/theme/model/themeThunk';
import { ThemeItem } from '@/entities/theme';

export const ThemeList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { themes } = useAppSelector((state) => state.themeList);

  useEffect(() => {
    dispatch(getAllThemes());
  }, [dispatch]);

  return (
      <div className={styles.container}>
        {themes.map((theme) => (
          <ThemeItem key={theme.id} theme={theme} />
        ))}
      </div>
  );
};

export default ThemeList;
