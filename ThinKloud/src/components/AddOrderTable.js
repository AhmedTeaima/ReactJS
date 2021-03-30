import React from "react";
import "./AddOrderTable.css";

function AddOrderTable({ order }) {
  let totalPrice = 0;
  if (order.length > 0) {
    for (let i = 0; i < order.length; i++) {
      totalPrice += order[i].total;
    }
  }
  const handleNewOrder = () => {
    document.location.reload();
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Q</th>
            <th scope="col">Price</th>
            <th scope="col">Addons</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {order.map((items) => {
            const { item, q, price, addCompo, addSpicy, id, total } = items;
            return (
              <tr key={id}>
                <td>{item}</td>
                <td>{q}</td>
                <td>{price}</td>
                <td>
                  {!addCompo ? "Add Compo" : ""} {addSpicy ? "" : "Add Spicy"}
                </td>
                <td>{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total-price">
        <p>Total : {totalPrice > 0 ? totalPrice : 0} LE</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleNewOrder}
        >
          New Order
        </button>
      </div>
    </>
  );
}

export default AddOrderTable;
