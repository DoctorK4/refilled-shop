import { JsxElement } from 'typescript'
import styles from '../styles/Header.module.scss'

export const Header:React.FC = () => {
  return (
    <header className={styles.headerwrap}>
      <div className={styles.wrapper}>
        <div className={styles.buttonwrap}>
          <button className={styles.shopbutton} type="button"></button>
        </div>
        <div className={styles.title}>
          <h1>Refilled</h1>
        </div>
        <div className={styles.buttonwrap}>
          <button className={styles.cartbutton} type="button"></button>
        </div>
      </div>
    </header>
  )
}