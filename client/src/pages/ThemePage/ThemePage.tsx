import React from 'react';
import styles from './TrackPage.module.css';


export function TrackPage () {
    return (
        <div className={styles.container}>
            <TrackForm/>
            <TrackList/>
        </div>
    )
}