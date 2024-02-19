import Connect from "./connect";

const SendNote = async ({noteID = null, title, content}) => {
    const response = Connect.API('/note', 'POST', {noteID, title, content});
    return response;
}

export default SendNote;