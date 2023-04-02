import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { TableControl } from "react-bootstrap-table-control";

export const BasketView = () => {
  const [basket, setBasket] = useState([]);
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <TableControl
      header={[
        { key: "id", name: "#" },
        { key: "name", name: "Name" },
        { key: "description", name: "Description" },
        { key: "special", name: "Special Offer" },
        { key: "adder", name: "Add Item" },
      ]}
      itens={[
        {
          id: 1,
          name: "Item A",
          description: "Description 1",
          special: "Special offer1",
          adder: <button>add</button>,
        },
        {
          id: 2,
          name: "Item B",
          description: "Description 2",
          special: "Special offer2",
          adder: <button onClick={handleClick}>add</button>,
        },
        {
          id: 3,
          name: "Item C",
          description: "Description 3",
          special: "Special offer3",
          adder: <button>add</button>,
        },
        {
          id: 4,
          name: "Item D",
          description: "Description 4",
          special: "Special offer4",
          adder: <button>add</button>,
        },
        {
          id: 5,
          name: "Item E",
          description: "Description 5",
          special: "Special offer5",
          adder: <button>add</button>,
        },
      ]}
    />
  );
};
