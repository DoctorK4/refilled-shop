import { ReactNode } from "react"
import styles from "../styles/Badge.module.scss"

export const Badge = ({ badgeType, children }: { 
  badgeType?: "NEW" | "BEST" | "",
  children: ReactNode,
}) => {
  return (
    <>
      { badgeType === "BEST" ?
        <span className={styles.best}>
          {children}
        </span>
        : 
        <span className={styles.new}>
          {children}
        </span>
      }
    </>
  )
}