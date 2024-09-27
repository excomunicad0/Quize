
import React from "react";
import styles from  "./StatPage.module.css";
import { useAppSelector } from "@/shared/hooks/reduxhooks";


export function StatPage() {
    const { user } = useAppSelector((state) => state.user);
    const {game} = useAppSelector((state) => state.game);

  return <div className={styles.container} >
    {user && <h1 className={styles.title}>{user.name}, твой IQ = {game && game.score/20}!</h1>}
  </div>;
}
