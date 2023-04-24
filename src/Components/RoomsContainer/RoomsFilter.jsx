import React from "react";
import { useContext } from "react";

// import context
import { RoomContext } from "../../Context/Context";

// import components
import Title from "../Title/Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // room guests filtering functionality
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Buscar Habitaciones" />

      <form className="filter-form">
        {/* select type start */}
        <div className="form-group">
          <label htmlFor="type">Tipo de habitaciones</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {/* <option value="single">single</option> */}
            {types}
          </select>
        </div>
        {/* select type end */}

        {/* guests type start */}
        <div className="form-group">
          <label htmlFor="capacity">Personas</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {/* <option value="single">single</option> */}
            {people}
          </select>
        </div>
        {/* guests type end */}

        {/* room price start */}
        <div className="form-group">
          <label htmlFor="price">Precio de habitacion ${price}</label>

          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* room price end */}

        {/* size start */}
     
        {/* size end */}

        {/* extras start */}
        <div className="form-group">
          {/* breakfast checked */}
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Desayuno</label>
          </div>

          {/* pets checked */}
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Mascotas</label>
          </div>
        </div>
        {/* extras end */}
      </form>
    </section>
  );
}
