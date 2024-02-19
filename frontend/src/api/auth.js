import Connect from "./connect";

const Auth = async ({login, password}) => {
    const response = Connect.API('/auth', 'POST', {login, password});
    return response;
}

export default Auth;