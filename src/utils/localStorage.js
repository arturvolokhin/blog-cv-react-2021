const setLocalStorage = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
}

const getLocalStorage = (name) => {
    !localStorage.getItem(name) && setLocalStorage(name, []);
    return JSON.parse(localStorage.getItem(name));
}

const presetData = () => {
    if (getLocalStorage('userInfo').length === 0) {
        const obj = {Name: 'Artur Volokhin', Birthday: '20.11.1997', 'Live to': 'Minsk, Belarus'};
        setLocalStorage('userInfo', obj);
    }
}



export {getLocalStorage, setLocalStorage, presetData};