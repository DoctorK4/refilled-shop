export const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: "#000",
      opacity: 0.8,
      padding: 20,
      width: "270px",
      height: "45px",
      boxShadow: 'none',
      borderTop: "1px solid #1A1A1A",
      borderLeft: "1px solid #1A1A1A",
      borderRight: "1px solid #1A1A1A",
      borderRadius: "0",
      fontSize: "13px",
      fontWeight: "400",
      lineHeight: "100%",
      backgroundColor: state.isSelected ? "#e6e6e6" : "#FFF",
      "&:hover" : {
        background: "#e6e6e6"
      },
      "&:last-child" : {
        borderBottom : "1px solid #1A1A1A",
      },
    }),
    control: (provided: any) => ({
      ...provided,
      fontSize: "13px",
      width: 270,
      height: 45,
      background: "#FFF",
      border: "1px solid #1A1A1A",
      borderRadius: "0",
      cursor: "pointer",
      color: "#000",
      outline: "none",
      "&:hover" : {
        outline: "none",
      },
    }),
    dropdownIndicator: (provided:any) => ({
      ...provided,
      color: "#000",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#1A1A1A",
      fontSize: "13px",
    }),
    placeholder: (provided:any) => {
      return {
          ...provided,
          color: "#000",
      }
    },
  };