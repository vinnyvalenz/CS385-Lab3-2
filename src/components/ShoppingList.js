import * as React from "react";
import { ShoppingListInput } from "./ShoppingListInput";
import { ShoppingListItem } from "./ShoppingListItem";

// This component renders a <ul> with its children being
// an array of ShoppingListItems
export function ShoppingList(props) {
  const [list, setList] = React.useState(["turkey"]);
  const shoppingList = list.map((item, index) => (
    <ShoppingListItem name={item} key={index} />
  ));
  const addItemToList = item => {
    setList([...list, item]);
  };

  return (
    <div>
      <ul>{shoppingList}</ul>
      <ShoppingListInput onClick={addItemToList} />
    </div>
  );
}
