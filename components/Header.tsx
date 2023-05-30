import { useRouter } from 'next/router';
import styles from '../styles/Header.module.scss'

export const Header:React.FC = () => {
  const router = useRouter();

  const handleToShop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/shop");
  };
  
  const handleToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/cart");
  };

  return (
    <header className={styles.headerwrap}>
      <div className={styles.wrapper}>
        <div className={styles.buttonwrap}>
          <button className={styles.shopbutton} type="button" onClick={handleToShop}></button>
        </div>
        <div className={styles.title}>
          <h1>Refilled</h1>
        </div>
        <div className={styles.buttonwrap}>
          <button className={styles.cartbutton} type="button" onClick={handleToCart}></button>
        </div>
      </div>
    </header>
  )
}