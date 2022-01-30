const setLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

const getLocalStorage = (name) => {
  !localStorage.getItem(name) && setLocalStorage(name, []);
  return JSON.parse(localStorage.getItem(name));
};

const presetData = () => {
  if (getLocalStorage('lang').length === 0) {
    setLocalStorage('lang', 'en');
  }

  if (!localStorage.getItem('posts')) {
    const posts = [
      {
        id: '68e85c9e-ae18-488a-ad9b-e0aeeb234678',
        login: 'admin',
        user: 'Artur Volokhin',
        value: `The total training time for the frontend is more
                    than a year, during which time I managed to make about 10 projects
                    and successfully pass specialized courses. I want to benefit your company,
                    get interesting experience and make new acquaintances.`,
      },

      {
        id: '68e85c9e-ae18-488a-ad9b-e0aeebaab99b',
        login: 'admin',
        user: 'Artur Volokhin',
        value: 'Someone invite me to work, please',
      },

      {
        id: '031d1d38-3aff-428e-95b2-6e7800ab0340',
        login: 'elenaa',
        user: 'Elena',
        value: 'Hello, i am authorized user!',
      },

      {
        id: '57d65bdd-477d-4553-801d-eb3c584de675',
        login: 'guest',
        value: 'Hello, i am guest!',
      },
    ];
    setLocalStorage('posts', posts);
  }

  if (getLocalStorage('usersRegData').length === 0) {
    const usersRegData = [
      {
        login: 'admin',
        name: 'Artur Volokhin',
        password: 'admin',
      },
    ];
    setLocalStorage('usersRegData', usersRegData);
  }

  if (!localStorage.getItem('status')) {
    const status = 'A am in a great mood for your offer :))))';
    setLocalStorage('status', status);
  }
};

export { getLocalStorage, setLocalStorage, presetData };
