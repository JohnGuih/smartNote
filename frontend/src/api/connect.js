const Connect = {
    API: async (endpoint, method, data = {}) => {
        const APItoken = Connect.Token.get('api');
        const APIurl = 'http://localhost:8000';
        const url = `${APIurl}${endpoint}`;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        if (APItoken) {
            options.headers['Authorization'] = `Bearer ${APItoken}`;
        }
        return fetch(url, options)
            .then(response => response.json())
            .catch(error => {
                console.error('API Error:', error);
                throw error;
            });
    },
    Token: {
        get: (tokenName) => {
            return localStorage.getItem(tokenName) || null;
        },
        set: (tokenName, token) => {
            localStorage.setItem(tokenName, token);
        },
        remove: (tokenName) => {
            localStorage.removeItem(tokenName);
        }
    },
}

export default Connect;