import React, { useEffect } from 'react';
// import styles from './TrackList.module.css'
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
    <div>
      <div>
        {themes.map((theme) => (
          <ThemeItem key={theme.id} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default ThemeList;
