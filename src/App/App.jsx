import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { CovidPage } from '../CovidPage';
import styles from '../assets/css/App.module.css';
import image from '../assets/images/image.png';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19" />
            
            <Router history={history}>
                <Switch>
                    <Route path="/" component={CovidPage} />
                </Switch>
            </Router>
        </div>
    );
}

export { App };