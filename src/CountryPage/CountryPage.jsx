import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NativeSelect, FormControl, CircularProgress } from '@material-ui/core';
import { covidActions } from '../_actions';

import styles from '../assets/css/Country.module.css';

function CountryPage() {

    const countryData = useSelector(state => state.country);
    const mapDispatchToProps = useDispatch();

    useEffect(() => {
        mapDispatchToProps(covidActions.getAllCountries());
    }, []);

    if (!countryData.items) {

        return null;
    }

    function handelChange(e) {
        mapDispatchToProps(covidActions.getDataBYCountry(e.target.value));
    }

    return (
        <div className={styles.formCointainer}>
            <FormControl className={styles.formControl} onChange={(e) => { handelChange(e); }}>
                <NativeSelect defaultValue="" >
                    <option value="global">Global</option>
                    {countryData.items.countries.map((country, i) => { return (<option key={i} value={country.name} >{country.name}</option>); })}
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export { CountryPage };