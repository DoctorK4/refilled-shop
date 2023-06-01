import { product } from "@/types/product";
import styles from "@/styles/Product.module.scss";
import Image from "next/image";
import { Badge } from "./Badge";
import { Options } from "./Options";
import { useState } from "react";

export default function Product({ productInfo }: { productInfo: product }) {
  const [showOptions, setShowOptions] = useState<boolean>(false); 
  const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowOptions(true);
  };
  // TODO : 유틸함수로 추상화
  const discountRate = Math.round(100 - ((productInfo.price/productInfo.originPrice)* 100));

  return (
    <>
      <div className={styles.productWrapper} onClick={handleClick}>
        <Image 
          width={168} 
          height={168}
          priority={true} 
          src={productInfo.imageUrl} 
          alt=""
        />
        { productInfo.tag ? 
          <>
            <Badge badgeType={productInfo.tag?.text}>
              {productInfo?.tag.text}
            </Badge> 
            <h3 className={styles.productNameWithBadge}>
              {productInfo.name}
            </h3>
          </>
          : 
          <h3 className={styles.productName}>
            {productInfo.name}
          </h3>
        }
        <p className={styles.productDesc}>
          {productInfo.desc}
        </p>
        { productInfo.price === productInfo.originPrice ?
          <p>
            <strong className={styles.price}>
              {productInfo.price.toLocaleString()}원
            </strong>
          </p>
          :
          <>
            <p className={styles.originPrice}>
              {productInfo.originPrice.toLocaleString()}원
            </p>
            <p className={styles.priceParagraph} >
              <span className={styles.discountRate}>{discountRate}% </span>
              <strong className={styles.price}>
                {productInfo.price.toLocaleString()}원
              </strong>
            </p>
          </>
        }
      </div>
      { showOptions ?
        <Options
          setShowOptions={setShowOptions}
          productInfo={productInfo}
        />
        : null
      }
    </>
  );
} ;