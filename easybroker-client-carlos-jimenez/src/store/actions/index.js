import axios from 'axios'

export function nPage () {
    return {
        type: 'nPage'
    }
}
export function pPage () {
    return {
        type: 'pPage'
    }
}
export function resetStatusForm () {
    return {
        type: 'resetStatusForm'
    }
}
export function selectPage (p) {
    return {
        type: 'selectPage',
        payload: p
    }
}
export function resetProperty (p) {
    return {
        type: 'resetProperty'
    }
}
export function getProperties (page) {
    return async (dispatch) => {
        try {
            let { data } =  await axios.get(`http://localhost:3007/${page}`);
            return dispatch({
                type: 'getProperties',
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getProperty (pid) {
    return async (dispatch) => {
        try {
            let { data } =  await axios.get(`http://localhost:3007/detail/${pid}`);
            return dispatch({
                type: 'getProperty',
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function sendForm (formData) {
    return async (dispatch) => {
        try {
            let { data } =  await axios.post(`http://localhost:3007/contact`, formData);
            return dispatch({
                type: 'sendForm',
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


/* 
let { data } =  await axios(`https://api.stagingeb.com/v1/properties?page=${page}&limit=50`, {
                headers: {
                    "accept": "application/json",
                    "X-Authorization": "l7u502p8v46ba3ppgvj5y2aad50lb9"
                }
            });
*/