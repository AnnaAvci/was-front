import React from 'react';
import classes from './Reservations.module.css';

const Reservations = () => {
    return (
      <div className={classes.reservations}>
        <h1>My reservations</h1>
        <table className={classes.table}>
          <thead>
            <th>Property / Photoshoot</th>
            <th>From</th>
            <th>To</th>
            <th>Message</th>
            <th>Accepted</th>
          </thead>
          <tbody>
            <tr className={classes.tr}>
              <td>Beach House in Florida</td>
              <td>10/10/2022</td>
              <td>10/10/2022</td>
              <td>Hello, I'd like to book your house for a photoshoot </td>
              <td>Yes / No </td>
            </tr>
            <tr className={classes.tr}>
              <td>Victorian House in London</td>
              <td>10/10/2022</td>
              <td>10/10/2022</td>
              <td>Hello, I'd like to book your house for a photoshoot </td>
              <td>Yes / No </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Reservations;