const getQueryString = params => {
    let esc = encodeURIComponent;
    return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}

const request = params => {
    let method = params.method || 'GET';
    let qs = '';
    let body;
    let headers = params.headers || {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    };

    if (['GET', 'DELETE'].indexOf(method) > -1)
    qs = '?' + getQueryString(params.data);
    else
    body = JSON.stringify(params.data);

    let url = params.url + qs;

    return fetch(url, { method, headers, body });
}

export default {
    get: params => request(Object.assign({ method: 'GET' }, params)),
    post: params => request(Object.assign({ method: 'POST' }, params)),
    put: params => request(Object.assign({ method: 'PUT' }, params)),
    delete: params => request(Object.assign({ method: 'DELETE' }, params))
};