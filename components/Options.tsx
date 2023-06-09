"use client";

import styles from "@/styles/Options.module.scss";
import { product } from "@/types/product";
import Select from "react-select";
import { SetStateAction, useState } from "react";
import { selectedOption } from "@/types/selectedOption";
import { customStyles } from "@/styles/CustomSelect";
import { useDispatch } from "react-redux";
import { getPayload } from "@/utils/getPayload";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducer/cartReducer";
import "@total-typescript/ts-reset/array-includes";

export const Options = ({ productInfo, setShowOptions}: {
  productInfo: product,
  setShowOptions: React.Dispatch<SetStateAction<boolean>>,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cartItems);
  const [selectedOption, setSelectedOption] = useState<selectedOption>(null);
  const optionObj = productInfo.productOptions.map(item => 
      ({value : item.name, label: item.name})
    );
    
    const handleSubmit = (e:React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      const selectedOptionObj = selectedOption === null ? null 
      : (productInfo.productOptions.filter(item => item.name === selectedOption.value)[0]);
      const selectedItem = getPayload(productInfo, selectedOptionObj);
      const checkSameItem = cartItems.filter(item => item.id === selectedItem.id && item.option?.id === selectedItem.option?.id)
      if (checkSameItem.length > 0){
        alert('이미 장바구니에 추가된 상품입니다.');
      } else {
        dispatch({
          type: "ADD_ITEM",
          payload: selectedItem,
        });
        setShowOptions(false);
      }
  };

  return (
    <div className={styles.optionModalContainer}>
      <div className={styles.modal} onClick={() => setShowOptions(false)}></div>
      <div className={styles.optionsWrapper}>
        <p className={styles.productName}>{productInfo.name}</p>
        <form onSubmit={handleSubmit}>
          { productInfo.productOptions.length !== 0 ?
            <>
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
              <button 
                className={styles.addCartButton} 
                type="submit"
                disabled={selectedOption === null}
                >
                장바구니 담기
              </button>
            </>
            :
            <>
            <select
              className={styles.noOption}
              disabled={true}
              defaultValue={"옵션 없음"}
            > 
              <option value="옵션 없음">옵션 없음</option>
            </select>
            <button 
              className={styles.addCartButton} 
              type="submit" 
            >
              장바구니 담기
            </button>
            </>
          }
        </form>
      </div>
    </div>
  )
};
