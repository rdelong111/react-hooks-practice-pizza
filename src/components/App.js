import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [formData, changeData] = useState({
    id: 0,
    topping: '',
    size: '',
    vegetarian: ''
  });

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then((r) => r.json())
      .then((pizzaList) => setPizzas(pizzaList));
  }, []);

  function handleFormChange(e) {
    changeData({
      ...formData,
      [e.target.name]: e.target.name === 'vegetarian' ?
        e.target.value === 'Vegetarian' ? true : false 
        :
        e.target.value
    });
  }

  function handleEditBtn(pizza) {
    changeData(pizza)
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formData.id !== 0) {
      fetch(`http://localhost:3001/pizzas/${formData.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then((r) => r.json())
        .then((updatedData) => {
          const updatedList = pizzas.map((pizza) => {
            return formData.id === pizza.id ? updatedData : pizza;
          });
          setPizzas(updatedList);
          changeData({
            id: 0,
            topping: '',
            size: '',
            vegetarian: ''
          });
        });
    }
  }

  return (
    <>
      <Header />
      <PizzaForm onFormChange={handleFormChange} editData={formData} onFormSubmit={handleFormSubmit} />
      <PizzaList pizzas={pizzas} onEditBtn={handleEditBtn} />
    </>
  );
}

export default App;
