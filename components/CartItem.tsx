import { selectedItem } from "@/types/cartItem";
import Image from "next/image";
import { Badge } from "./Badge";
import styles from "@/styles/CartItem.module.scss";
import { useDispatch } from "react-redux";
import { getDistcountRate } from "@/utils/getDiscountRate";

export const CartItem = ({item}:{item: selectedItem}) => {
  const dispatch = useDispatch();
  const originalPrice = (item.option?.price) ? (item.originPrice + item.option.price) : (item.originPrice);
  const discountedPrice = (item.option?.price) ? (item.price + item.option.price) : (item.price);
  const discountRate = getDistcountRate(discountedPrice, originalPrice);

  const handleClick = () => {
    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
  };

  return (
    <div className={styles.itemWrapper}>
      <Image
        width={60} 
        height={60} 
        src={item.imageUrl} 
        alt=""
        priority={true}
      />
      <button
        className={styles.deleteButton}
        type="button" 
        aria-label="장바구니 목록에서 삭제"
        onClick={handleClick}
      >
      </button>
      { item.tag !== "" ?
        <Badge badgeType={item.tag.text}>
          {item.tag.text}
        </Badge>
      : null
      }
      <h3 className={styles.productName}>
        {item.name}
      </h3>
      <p className={styles.itemOption}>{item.option?.name}</p>
      { discountRate === 0 ? 
        null
        : 
        <>
          <span className={styles.originalPrice}>{originalPrice.toLocaleString()}원</span>
          <span className={styles.discountRate}>{discountRate}%</span>
        </>
      }
      <strong>{discountedPrice.toLocaleString()}원</strong>
    </div>
  )
}