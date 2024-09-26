import React from "react";
import styles from "./ThemeItem.module.css";


export const ThemeItem: React.FC<Props> = ({ theme }) => {

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <h1>{theme.title}</h1>
                <img src={theme.image} alt={theme.title} className={styles.image} />
            </div>
        </div>
    )
}