import React from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// imports components
import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";
import RoomContainer from "../Components/RoomsContainer/RoomsContainer";

function Room() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Nuestras habitaciones">
          <Link to="/" className="btn-primary">
            Inicio
          </Link>
        </Banner>
      </Hero>

      <RoomContainer />
    </>
  );
}

export default Room;
