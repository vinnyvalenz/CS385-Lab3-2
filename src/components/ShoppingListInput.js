import * as React from "react";

// This component renders an <input> and a <button>
export function ShoppingListInput(props) {
  const [item, setItem] = React.useState("");
  // onChange handler example:
  const handleChange = e => {
    setItem(e.currentTarget.value);
  };
  const handleClick = () => {
    if (item) {
      props.onClick(item);
      setItem("");
    }
  };
  return (
    <div>
      <input type="text" name="item" onChange={handleChange} value={item} />
      <button type="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
