
const initialState = {
    page: 1,
    properties: [],
    pagination: [],
    property: [],
    resStatus: ""
}

export default function reducer (state = initialState, { type, payload }) {
    switch (type) {
        case 'nPage': return {...state, page: state.page + 1};
        case 'pPage': if(state.page === 1) {
                            return state;
                        } else {
                            return {...state, page: state.page - 1};
                        }
        case 'selectPage': return {...state, page: payload};
        case 'getProperties': return {...state, properties: payload.content, pagination: payload.pagination };
        case 'getProperty': return {...state, property: payload};
        case 'resetProperty': return {...state, property: []};
        case 'sendForm': return {...state, resStatus:payload };
        default: return state;
    }
}