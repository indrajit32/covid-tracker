import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from './Cards';
import { Chart } from '../Chart';

import { covidActions } from '../_actions';

import { CountryPage } from '../CountryPage/CountryPage';

function CovidPage() {
    const covidData = useSelector(state => state.covid);
    const mapDispatchToProps = useDispatch();

    useEffect(() => {
        mapDispatchToProps(covidActions.getAll());
    }, []);

    return (
        <div>
            <Cards />
            <CountryPage />
            <Chart />
        </div>
    );
}

export { CovidPage };