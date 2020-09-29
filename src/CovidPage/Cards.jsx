import React, { useEffect } from 'react';
import { Grid, Box, CardContent, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import styles from '../assets/css/Cards.module.css';

import { CardComponent } from '../_components';


function Cards() {

  const covidData = useSelector(state => state.covid);

  if (!covidData.items) {
    return (<CircularProgress />);
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={covidData.items && covidData.items.confirmed.value}
          lastUpdate={covidData.items && covidData.items.lastUpdate}
          cardSubtitle="Number of active cases."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={covidData.items && covidData.items.recovered.value}
          lastUpdate={covidData.items && covidData.items.lastUpdate}
          cardSubtitle="Number of recoveries cases."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={covidData.items && covidData.items.deaths.value}
          lastUpdate={covidData.items && covidData.items.lastUpdate}
          cardSubtitle="Number of deaths cases."
        />
      </Grid>
    </div>
  );


}

export { Cards };
