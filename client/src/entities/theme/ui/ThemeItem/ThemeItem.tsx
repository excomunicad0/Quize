import React from "react";
import styles from "./ThemeItem.module.css";
import { Theme } from '../../model';


type Props = {
    theme: Theme
}

export const ThemeItem: React.FC<Props> = ({ theme }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <h1>{theme.title}</h1>
                <img src={theme.image} className={styles.image} width={400} alt={theme.title}  />
            </div>
        </div>
    )
}