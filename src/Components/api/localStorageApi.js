const setLocalStorage = (name, data) => {
    return localStorage.setItem(name, JSON.stringify(data));
}

const getLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
}

export {getLocalStorage, setLocalStorage};