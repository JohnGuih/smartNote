import Connect from "./connect";

const getUserNotes = async () => {
    const response = Connect.API('/note', 'GET');
    return response;
}

export default getUserNotes;