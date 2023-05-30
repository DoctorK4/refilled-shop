import { productOptions } from "@/types/product";

export const Select = ({ option, disabled } : { 
  option: productOptions[],
  disabled: boolean,
}) => {
  return (
    <select disabled={disabled}>
      {option ? 
        option.map(item => 
        <option key={item.id} value={item.name}>{item.name}</option>)
        : null
      }
    </select>
  )
}