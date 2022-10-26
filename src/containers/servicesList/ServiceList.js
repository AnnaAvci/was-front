import React from 'react';
import weddingPhoto from "../../assets/img/wedding.webp";
import artisticPhoto from "../../assets/img/artistic.webp";
import animalsPhoto from "../../assets/img/animals.webp";
import portraitPhoto from "../../assets/img/portrait.webp";
import classes from "./ServiceList.module.css";
import CardBox from '../../components/UI/CardBox/CardBox';
import Card from '../../components/UI/Card/Card';

const ServiceList = () => {


    const serviceList = [
      {
        imgUrl: weddingPhoto,
        title: "Wedding photoshoot",
        price: 15,
      },
      {
        imgUrl: artisticPhoto,
        title: "Artistic photoshoot",
        price: 15,
      },
      {
        imgUrl: animalsPhoto,
        title: "Animal photoshoot",
        price: 26,
      },
      {
        imgUrl: portraitPhoto,
        title: "Portrait photoshoot",
        price: 5,
      }
    ];

    return (
      <section id="serviceList">
        <h1>Photoshoots</h1>
        <CardBox>
          {serviceList.map((element) => (
            <Card
              imgUrl={element.imgUrl}
              title={element.title}
              price={element.price}
            />
          ))}
        </CardBox>
      </section>
    );
};

export default ServiceList;