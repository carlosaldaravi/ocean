export const config = {
    headers: {
        "Authorization" : localStorage.token
    },
    apiURL: 'http://localhost:3000',
    network:{
        SUCCESS: 200,
        UNAUTHORIZED: 401
    }
}