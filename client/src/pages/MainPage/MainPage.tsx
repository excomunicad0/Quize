import { StartGame } from "@/widgets/StartGame";
import React from "react";
import styles from  "./MainPage.module.css";


export function MainPage() {
  return <div className={styles.container} ><StartGame/></div>;
}
