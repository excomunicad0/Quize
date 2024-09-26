import React from 'react';
import styles from './ThemePage.module.css';
import { ThemeList } from '@/widgets/ThemeList';
import QuestionList from '@/widgets/QuestionList/QuestionList';


export function ThemePage () {
    return (
        <div className={styles.container}>
            <ThemeList/>
            <QuestionList/>
        </div>
    )
}