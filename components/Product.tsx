import { product } from "@/types/product";
import styles from "@/styles/Product.module.scss";
import Image from "next/image";
import { Badge } from "./Badge";
import { Options } from "./Options";
import { useState } from "react";

export default function Product({ productInfo }:{ productInfo:product }) {
  const [showOptions, setShowOptions] = useState<boolean>(false); 
  const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowOptions(true);
  }

  return (
    <>
      <div className={styles.productWrapper} onClick={handleClick}>
        <Image 
          width={168} 
          height={168} 
          src={productInfo.imageUrl} 
          alt=""
        />
        {productInfo.tag ? 
          <Badge badgeType={productInfo?.tag.text}>{productInfo?.tag.text}</Badge> 
          : null
        }
        <h3 className={styles.productName}>
          {productInfo.name}
        </h3>
        <p className={styles.productDesc}>
          {productInfo.desc}
        </p>
        {productInfo.originPrice}
        {productInfo.price}
      </div>
      { showOptions ?
        <Options
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          productInfo={productInfo}
        />
        : null
      }
    </>
  )
} 