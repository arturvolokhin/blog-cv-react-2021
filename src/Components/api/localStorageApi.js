const setLocalStorage = (name, data) => {
    return localStorage.setItem(name, JSON.stringify(data));
}

const getLocalStorage = (name) => {
    !localStorage.getItem(name) && setLocalStorage(name, []);
    return JSON.parse(localStorage.getItem(name));
}

const presetData = () => {
    if (getLocalStorage('userInfo').length === 0) {
        const obj = {Login: '', Name:'', Birthday:'', 'Live to':''};
        setLocalStorage('userInfo', obj);
    }
}



export {getLocalStorage, setLocalStorage, presetData};