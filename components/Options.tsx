import styles from "@/styles/Options.module.scss";
import { product } from "@/types/product";
import Select from "react-select";
import { SetStateAction, useState } from "react";
import { selectedOption } from "@/types/selectedOption";
import { customStyles } from "@/styles/CustomSelect";

export const Options = ({ productInfo, showOptions, setShowOptions}: {
  productInfo: product, 
  showOptions: boolean,
  setShowOptions: React.Dispatch<SetStateAction<boolean>>,
}) => {
  const [selectedOption, setSelectedOption] = useState<selectedOption>(null);
  const optionObj = productInfo.productOptions.map(item => 
    ({value : item.name, label: item.name})
  );
  
  const handleSubmit = () => {
    // TODO : 선택한 옵션과 일치하는 옵션 정보를 제품 정보와 함께 addtocart
  };

  return (
    <div className={styles.optionModalContainer}>
      <div className={styles.modal} onClick={() => setShowOptions(false)}></div>
      <div className={styles.optionsWrapper}>
        <p className={styles.productName}>{productInfo.name}</p>
        <form onSubmit={handleSubmit}>
          { productInfo.productOptions.length !== 0 ?
            <Select
            styles={customStyles}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={optionObj}
            isSearchable={false}
            placeholder="옵션 선택"
            components={{
              IndicatorSeparator: () => null,
            }}
            />
            : 
            <select
            className={styles.noOption}
            disabled={true}
            > 
              <option selected>옵션 없음</option>
            </select>
          }
          <button 
            className={styles.addCartButton} 
            type="submit" 
          >
            장바구니 담기
          </button>
        </form>
      </div>
    </div>
  )
};
