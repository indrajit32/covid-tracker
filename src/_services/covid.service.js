import config from 'config';
const baseUrl = `${config.apiUrl}`;

export const covidService = {
    getAll,
    getAllCountries,
    getDataBYCountry
};

function getAll() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`${baseUrl}`, requestOptions).then(handleResponse);
}

function getAllCountries() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`${baseUrl}countries`, requestOptions).then(handleResponse);
}

function getDataBYCountry(code) {
    const requestOptions = {
        method: 'GET'
    };

    let url = `${baseUrl}`;

    if (code != 'global') {
        url = `${baseUrl}countries/` + code;
    }


    return fetch(url, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        /*
         if (!response.ok) {
             if (response.status === 401) {
                 // auto logout if 401 response returned from api
                 logout();
                 location.reload(true);
             }
 
             const error = (data && data.message) || response.statusText;
             return Promise.reject(error);
         }
         */
        return data;
    }).catch( (err)=>{
        console.log('===================');
    });
}