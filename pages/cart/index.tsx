import { CartItem } from '@/components/CartItem'
import { RootState } from '@/store/reducer/cartReducer'
import styles from '@/styles/Cart.module.scss'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cartItems)
  // TODO : 합계 금액 구하기

  return (
    <div className={styles.CartWrapper}>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className={styles.itemUnit}>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>장바구니가 비어있습니다.</p>
      )}
      <button className={styles.buyButton} type="button">
        {cartItems.length}개 | 290,000원 구매하기
      </button>
    </div>
  );
};
