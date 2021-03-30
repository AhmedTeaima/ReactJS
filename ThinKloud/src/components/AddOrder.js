import React, { useReducer, useRef, useState } from "react";
import AddOrderTable from "./AddOrderTable";
import { reducer, defaultState } from "./reducer";
import "./AddOrder.css";

function AddOrder() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [order, setOrder] = useState([]);
  const [checkedCompo] = useState(false);
  const [checkedSpicy] = useState(false);
  const quntityRef = useRef(null);
  const compoRef = useRef(null);
  const spicyRef = useRef(null);

  const handleCategoryChang = (e) => {
    const target = e.target.value;
    if (target === "orders-items") {
      dispatch({ type: "ORDERS" });
    }
    if (target === "Meat") {
      dispatch({ type: "MEAT_MEAL" });
    }
    if (target === "Chiken") {
      dispatch({ type: "CHIKEN_MEAL" });
    }
  };
  const handleMealChange = (e) => {
    const target = e.target.value;
    if (target === "default") {
      dispatch({ type: "DEFAULT_PRICE" });
    }
    if (target === "Cold Meat") {
      dispatch({ type: "COLD_MEAT_PRICE" });
    }
    if (target === "Meat With Souce") {
      dispatch({ type: "MEAT_SOUCE_PRICE" });
    }
    if (target === "Grilled Chiken") {
      dispatch({ type: "GRILLED_CHIKEN_PRICE" });
    }
    if (target === "Indian Chiken") {
      dispatch({ type: "INDIAN_CHIKEN_PRICE" });
    }
  };
  const handleQuntityChange = () => {
    let newTotal = quntityRef.current.value;
    if (quntityRef.current.value >= 0) {
      dispatch({ type: "SET_QUNTITY", payload: newTotal });
    }
    if (quntityRef.current.value > 0) {
      dispatch({ type: "INCREASE_TOTAL_QUNTITY" });
    }
  };
  const handleCompoChange = () => {
    if (compoRef.current.value === "false") {
      dispatch({ type: "ADD_ON_COMPO" });
    }
    if (compoRef.current.value === "true") {
      dispatch({ type: "REMOVE_ADD_ON_COMPO" });
    }
  };
  const handleSpicyChange = () => {
    if (spicyRef.current.value === "false") {
      dispatch({ type: "ADD_ON_SPICY" });
    }
    if (spicyRef.current.value === "true") {
      dispatch({ type: "REMOVE_ADD_ON_SPICY" });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder([
      ...order,
      {
        item: state.item,
        q: state.q,
        compo: state.addCompo,
        spicy: state.addSpicy,
        total: state.total,
        price: state.price,
        id: new Date().getTime().toString(),
      },
    ]);
  };
  const resetDefault = () => {
    document.getElementById("form").reset();
    state.addCompo = false;
    state.addSpicy = false;
  };
  return (
    <>
      <section>
        <form id="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="m-2 d-flex">
            <div className="inputs">
              <div className="category-input my-2">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  onChange={(e) => handleCategoryChang(e)}
                  className="mx-4"
                >
                  <option value="orders-items">--Choose--</option>
                  {state.orderCateg.map((items) => {
                    const { id, order } = items;
                    return <option key={id}>{order}</option>;
                  })}
                </select>
              </div>
              <div className="category-input my-2">
                <label htmlFor="meal">Meal</label>
                <select
                  onChange={(e) => handleMealChange(e)}
                  className="mx-4"
                  id="meal"
                >
                  <option value="default">-----</option>
                  {state.meals.map((items) => {
                    const { id, meal, price } = items;
                    return (
                      <option value={meal} key={id}>
                        {meal} {price}LE
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="quntity-input">
                <label htmlFor="quntity">Q</label>
                <input
                  className="mx-4"
                  ref={quntityRef}
                  onChange={handleQuntityChange}
                  type="number"
                  id="quntity"
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  ref={compoRef}
                  value={state.addCompo}
                  checked={state.addCompo ? !checkedCompo : checkedCompo}
                  onChange={handleCompoChange}
                  type="checkbox"
                  id="combo"
                />
                <label htmlFor="combo" className="mx-2">
                  Combo add-2LE
                </label>
              </div>
              <div>
                <input
                  ref={spicyRef}
                  value={state.addSpicy}
                  checked={state.addSpicy ? !checkedSpicy : checkedSpicy}
                  onChange={handleSpicyChange}
                  type="checkbox"
                  id="spicy"
                />
                <label htmlFor="spicy" className="mx-2">
                  Spicy add-1LE
                </label>
              </div>
              <div className="mt-5 ml-5">{state.total}LE</div>
            </div>
          </div>
          <button
            type="submit"
            onClick={resetDefault}
            className="btn btn-primary submit"
          >
            Add
          </button>
        </form>
      </section>
      <AddOrderTable checkedCompo={checkedCompo} order={order} />
    </>
  );
}

export default AddOrder;
