import Connect from "./connect";

const getUserNote = async (noteID) => {
    const response = Connect.API('/note/' + noteID, 'GET');
    return response;
}

export default getUserNote;