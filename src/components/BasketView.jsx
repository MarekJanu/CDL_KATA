import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { TableControl } from "react-bootstrap-table-control";
import "./Styling.css";

export const BasketView = () => {
  const [basket, setBasket] = useState([]);
  const productMatrix = {
    1: {
      name: "Item A",
      description: "Description 1",
      special: "Special offer1",
      itemprice: 50,
    },
    2: {
      name: "Item B",
      description: "Description 2",
      special: "Special offer2",
      itemprice: 30,
    },
    3: {
      name: "Item C",
      description: "Description 3",
      special: "Special offer3",
      itemprice: 20,
    },
    4: {
      name: "Item D",
      description: "Description 4",
      special: "Special offer4",
      itemprice: 15,
    },
    5: {
      name: "Item E",
      description: "Description 5",
      special: "Special offer5",
      itemprice: 18,
    },
  };
  const handleClick = (arg) => {
    let tempItem = {
      name: productMatrix[arg].name,
      description: productMatrix[arg].description,
      special: "",
      itemprice: productMatrix[arg].itemprice,
    };
    setBasket((currState) => [...currState, tempItem]);
    console.log(basket);
  };
  // const tempBasket = "";

  return (
    <>
      <div className="container">
        <TableControl
          header={[
            { key: "id", name: "#" },
            { key: "name", name: "Name" },
            { key: "description", name: "Description" },
            { key: "special", name: "Special Offer" },
            { key: "itemprice", name: "Price per Item" },
            { key: "adder", name: "Add Item" },
          ]}
          itens={[
            {
              id: 1,
              name: "Item A",
              description: "Description 1",
              special: "Special offer1",
              itemprice: 50,
              adder: <button onClick={() => handleClick(1)}>add</button>,
            },
            {
              id: 2,
              name: "Item B",
              description: "Description 2",
              special: "Special offer2",
              itemprice: 30,
              adder: <button onClick={() => handleClick(2)}>add</button>,
            },
            {
              id: 3,
              name: "Item C",
              description: "Description 3",
              special: "Special offer3",
              itemprice: 20,
              adder: <button onClick={() => handleClick(3)}>add</button>,
            },
            {
              id: 4,
              name: "Item D",
              description: "Description 4",
              special: "Special offer4",
              itemprice: 15,
              adder: <button onClick={() => handleClick(4)}>add</button>,
            },
            {
              id: 5,
              name: "Item E",
              description: "Description 5",
              special: "Special offer5",
              itemprice: 18,
              adder: <button onClick={() => handleClick(5)}>add</button>,
            },
          ]}
        />
      </div>
      <br></br>
      <br></br>

      <div className="whatever">
        <TableControl
          header={[
            { key: "id", name: "#" },
            { key: "name", name: "Name" },
            { key: "description", name: "Description" },
            { key: "special", name: "Special Offer" },
            { key: "priceitem", name: "Item Price" },
            { key: "quantity", name: "Number of Items" },
            { key: "pricetotal", name: "Price" },
          ]}
          itens={basket.map((item) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            special: item.special,
            priceitem: item.priceitem,
            itemquantity: item.itemquantity,
            pricetotal: item.pricetotal,
          }))}
          total="ble"
        />
      </div>
    </>
  );
};
