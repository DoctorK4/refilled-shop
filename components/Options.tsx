import styles from "@/styles/Options.module.scss";
import { product } from "@/types/product";
import { Select } from "./Select";

export const Options = ({productInfo}: {productInfo:product}) => {
  const handleSubmit = () => {

  };
  return (
    <div className={styles.optionsWrapper}>
      <p>{productInfo.name}</p>
      <form onSubmit={handleSubmit}>
        <Select 
          disabled={productInfo.productOptions.length === 0}
          option={productInfo.productOptions}
        />
        <button 
          className={styles.addCartButton} 
          type="submit" 
        >
          장바구니 담기
        </button>
      </form>
    </div>
  )
}