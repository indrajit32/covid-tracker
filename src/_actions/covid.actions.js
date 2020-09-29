import { covidConstants } from '../_constants';
import { covidService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
//import { covidConstants } from '../_constants/covid.constants';

export const covidActions = {
    getAll,
    getAllCountries,
    getDataBYCountry
};

function getAll() {
    return dispatch => {
        dispatch(request());

        covidService.getAll()
            .then(
                data => dispatch(success(data)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: covidConstants.GETALL_REQUEST } }
    function success(data) { return { type: covidConstants.GETALL_SUCCESS, data } }
    function failure(error) { return { type: covidConstants.GETALL_FAILURE, error } }
}

function getAllCountries() {
    return dispatch => {
        dispatch(request());

        covidService.getAllCountries()
            .then(
                data => dispatch(success(data)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: covidConstants.GETALL_COUNTRIES_REQUEST } }
    function success(data) { return { type: covidConstants.GETALL_COUNTRIES_SUCCESS, data } }
    function failure(error) { return { type: covidConstants.GETALL_COUNTRIES_FAILURE, error } }
}

function getDataBYCountry( countrycode ) {
    return dispatch => {
        dispatch(request());

        dispatch(setCountry(countrycode.toString()));

        covidService.getDataBYCountry( countrycode )
            .then(
                data => dispatch(success(data)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: covidConstants.GETALL_REQUEST } }
    function success(data) { return { type: covidConstants.GETALL_SUCCESS, data } }
    function failure(error) { return { type: covidConstants.GETALL_FAILURE, error } }
    function setCountry(countrycode) { return { type: covidConstants.SET_REQUESTED_COUNTRY, countrycode} }
}

