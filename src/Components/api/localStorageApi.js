const setLocalStorage = (name, data) => {
    return localStorage.setItem(name, JSON.stringify(data));
}

const getLocalStorage = (name) => {
    !localStorage.getItem(name) && setLocalStorage(name, []);
    return JSON.parse(localStorage.getItem(name));
}

export {getLocalStorage, setLocalStorage};