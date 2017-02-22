import fetch from 'UTIL/fetch.js';

var fetchLogin = (data) => fetch('/api/login', {
    type: 'POST',
    data: data
})


export { fetchLogin };