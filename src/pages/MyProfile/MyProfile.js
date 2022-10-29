import React from 'react';
import classes from './MyProfile.module.css'
import Card from '../../components/UI/Card/Card';
import CardBox from '../../components/UI/CardBox/CardBox';
import weddingPhoto from '../../assets/img/wedding.webp'
import artisticPhoto from '../../assets/img/artistic.webp'
import hutPhoto from '../../assets/img/hut.webp'
import victorianHouse from '../../assets/img/victorianHouse.webp'


const MyProfile = () => {
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
      }
    ];
        const locationList = [
      {
        imgUrl: hutPhoto,
        title: "Fisherman's hut",
        price: 15,
      },
      {
        imgUrl: victorianHouse,
        title: "Victorian House",
        price: 15,
      }
    ];

   
    return (
      <div className={classes.myProfile}>
        <h1>My Photoshoots:</h1>
        <CardBox className={classes.cardBox}>
          {serviceList.map((element) => (
            <Card
              imgUrl={element.imgUrl}
              title={element.title}
              price={element.price}
            />
          ))}
        </CardBox>
        <h1>My Properties:</h1>
        <CardBox className={classes.cardBox}>
          {locationList.map((element) => (
            <Card
              imgUrl={element.imgUrl}
              title={element.title}
              price={element.price}
            />
          ))}
        </CardBox>
        <div className={classes.profileReservations}>
          <h2>Reservation requests:</h2>
          <table className={classes.table}>
            <thead>
              <th>User</th>
              <th>Would like to book</th>
              <th>From</th>
              <th>To</th>
              <th>Message</th>
              <th colSpan={2}>Actions</th>
            </thead>
            <tbody>
              <tr className={classes.tr}>
                <td>John Smith</td>
                <td>Beach House in Florida</td>
                <td>10/10/2022</td>
                <td>10/10/2022</td>
                <td>Hello, I'd like to book your house for a photoshoot </td>
                <td>Accept </td>
                <td>Decline </td>
              </tr>
              <tr className={classes.tr}>
                <td>John Smith</td>
                <td>Victorian House in London</td>
                <td>10/10/2022</td>
                <td>10/10/2022</td>
                <td>Hello, I'd like to book your house for a photoshoot </td>
                <td>Accept </td>
                <td>Decline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyProfile;