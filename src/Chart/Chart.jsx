import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NativeSelect, FormControl, CircularProgress } from '@material-ui/core';
import { covidActions } from '../_actions';

import { Line, Bar } from 'react-chartjs-2';

import styles from '../assets/css/Chart.module.css';

function Chart() {

    const data = useSelector(state => state.covid.items);

    const country = useSelector(state => state.country);

    let selectedCountry = (country.setcountry? country.setcountry : 'Global');

    const barChart = (
        data ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${selectedCountry}` },
                }}
            />
        ) : null
    );


    return (
        <div className={styles.container}>
            { barChart }
        </div>
    );
}

export { Chart };