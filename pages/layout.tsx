import { ReactNode } from "react";
import styles from "@/styles/layout.module.scss";

export default function MainLayout({children}:{children:ReactNode}) {
  return (
    <div className={styles.mainContainer}>
      {children}
    </div>
  )
};