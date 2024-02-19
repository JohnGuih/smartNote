const formDataAsJSON = (e) => {
    const formData = new FormData(e.target);
    return Object.fromEntries(formData);
}

export default formDataAsJSON;