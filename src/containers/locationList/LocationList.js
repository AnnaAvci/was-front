import React from "react";
import parisApartment from "../../assets/img/paris.webp";
import beachHouse from "../../assets/img/beachHouse.webp";
import fishermanHut from "../../assets/img/hut.webp";
import victorianHouse from "../../assets/img/victorianHouse.webp";
import classes from "./LocationList.module.css";
import CardBox from "../../components/UI/CardBox/CardBox";
import Card from "../../components/UI/Card/Card";

const LocationList = () => {


  const locationList = [
    {
      imgUrl: parisApartment,
      title: "Parisian apartment",
      price: 15,
    },
    {
      imgUrl: beachHouse,
      title: "Beach house",
      price: 15,
    },
    {
      imgUrl: fishermanHut,
      title: "Fisherman's hut",
      price: 26,
    },
    {
      imgUrl: victorianHouse,
      title: "Victorian house",
      price: 5,
    },
    {
      imgUrl: parisApartment,
      title: "Parisian apartment",
      price: 50,
    },
    {
      imgUrl: victorianHouse,
      title: "House of M",
      price: 150,
    },
  ];

  return (
    <section id="locationList">
      <h1>Locations</h1>
      <CardBox>
        {locationList.map((element) => (
          <Card
            imgUrl={element.imgUrl}
            title={element.title}
            price={element.price}
          />
        ))}
      </CardBox>
      <div className={classes.cardBox}></div>
    </section>
  );
};

export default LocationList;
