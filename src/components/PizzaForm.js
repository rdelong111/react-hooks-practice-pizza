import React from "react";

function PizzaForm({onFormChange, editData, onFormSubmit}) {
  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={onFormChange}
            value={editData.topping}
          />
        </div>
        <div className="col">
          <select onChange={onFormChange} value={editData.size} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={onFormChange}
              checked={editData.vegetarian === '' ? false : editData.vegetarian ? true : false}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={onFormChange}
              checked={editData.vegetarian === '' ? false : editData.vegetarian ? false : true}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
