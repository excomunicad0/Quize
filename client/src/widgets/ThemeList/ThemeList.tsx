import React, { useEffect } from 'react'
import styles from './TrackList.module.css'
import { useAppDispatch } from '@/shared/hooks/reduxhooks';


export const ThemeList: React.FC = () => {
    const { themes } = useAppSelector((state) => state.themeList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllThemes());
    }, [dispatch])

  return (
    <div className={styles.container}>
    <div className={styles.list}>
      {themes &&
        themes.map((theme) => (
          <ThemeItem
            key={theme.id}
            theme={theme}
          />
        ))}
    </div>
  </div>
  )
}

export default ThemeList