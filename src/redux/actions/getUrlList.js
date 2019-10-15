import apiFetch  from "../../services/api";

export const type = 'getUrlList';

const getUrlList = params => {
    console.log(params);
    const request = apiFetch.get(params)
    .then(response => response.json())
    .then(responseJson => {console.log(responseJson)});

    return {
        type,
        payload: request,
    }
};

export default getUrlList;