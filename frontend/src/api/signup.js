import Connect from "./connect";

const Signup = async ({name, email, password}) => {
    const response = Connect.API('/signup', 'POST', {name, email, password});
    return response;
}

export default Signup;