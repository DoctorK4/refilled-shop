import { ReactNode } from "react";
import styles from "@/styles/layout.module.scss";

export default function MainLayout({children}:{children:ReactNode}) {
  return (
    <>
    <div className={styles.mainContainer}>
      {children}
    <p className={styles.hello}>
      <strong>
        지금 바로 <br/>
        리필드를 검색해보세요!
      </strong>
      </p>
    </div>
    </>
  )
};