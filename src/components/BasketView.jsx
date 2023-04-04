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

  const itemsCount = {
    "Item A": 0,
    "Item B": 0,
    "Item C": 0,
    "Item D": 0,
    "Item E": 0,
  };
  basket.forEach((item) => (itemsCount[item.name] += item.itemquantity));

  const priceTotals = {
    "Item A": 0,
    "Item B": 0,
    "Item C": 0,
    "Item D": 0,
    "Item E": 0,
  };
  basket.forEach((item) => (priceTotals[item.name] += item.pricetotal));

  const specialOffers = {
    "Item A": { items: 3, price: 130 },
    "Item B": { items: 2, price: 45 },
  };

  const handlePrice = (arg1, arg2) => {
    if (!specialOffers[arg1]) {
      let sumSum = itemsCount[arg1] * arg2;
      return sumSum;
    } else {
      let discountPriecSum =
        Math.floor(itemsCount[arg1] / specialOffers[arg1].items) *
        specialOffers[arg1].price;
      let standardPriceSum =
        (itemsCount[arg1] % specialOffers[arg1].items) * arg2;
      return discountPriecSum + standardPriceSum;
    }
  };

  let testSum = basket.map((item) => handlePrice(item.name, item.itemprice));
  let totTot = testSum.reduce((x, y) => x + y, 0);

  const handleClick = (arg) => {
    let tempItem = {
      name: productMatrix[arg].name,
      description: productMatrix[arg].description,
      special: specialOffers[productMatrix[arg].name]
        ? specialOffers[productMatrix[arg].name].items +
          " for " +
          specialOffers[productMatrix[arg].name].price
        : "",
      itemprice: productMatrix[arg].itemprice,
      pricetotal:
        priceTotals[productMatrix[arg].name] + productMatrix[arg].itemprice,
      itemquantity: itemsCount[productMatrix[arg].name] + 1,
    };

    let tempBasket = basket.map((x) => x.name);
    let checkIfIn = tempBasket.includes(productMatrix[arg].name);
    let copyBasket = basket.map((item) => ({ ...item }));

    if (basket.length === 0) {
      setBasket([tempItem]);
    } else {
      if (checkIfIn) {
        let indexCheck = tempBasket.indexOf(productMatrix[arg].name);
        copyBasket[indexCheck] = tempItem;
        setBasket(copyBasket);
      } else {
        setBasket((currState) => [...currState, tempItem]);
      }
    }
  };

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
          totalPosition="bottom"
          next={false}
          pagination={false}
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
            { key: "itemprice", name: "Price" },
            { key: "quantity", name: "Qty" },
            { key: "pricetotal", name: "Total" },
          ]}
          itens={basket.map((item) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            special: item.special,
            itemprice: item.itemprice,
            quantity: item.itemquantity,
            pricetotal: handlePrice(item.name, item.itemprice),
          }))}
          next={false}
          pagination={false}
          total={totTot}
          totalPosition="bottom"
        />
      </div>
    </>
  );
};
