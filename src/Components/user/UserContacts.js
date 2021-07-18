import { ThemeContext } from "../../context/ThemeProvider";

const UserContacts = () => {
    return(
        <ThemeContext>
            {({text}) => (
                <article className="section user__contacts">
                    <h2 className="subtitle">My contacts:</h2>
                    <ul className="user__contacts-content">
                        <li className="user__contacts-item">
                            <a class={`user__contacts-link ${text}`} href="https://vk.com/arturvolokhin97" 
                                rel="noreferrer" target="_blank">arturvolokhin97</a>
                        </li>

                        <li className="user__contacts-item">
                            <a class={`user__contacts-link ${text}`} href="https://github.com/arturvolokhin" 
                                rel="noreferrer" target="_blank">arturvolokhin</a>
                        </li>

                        <li className="user__contacts-item">
                            <a class={`user__contacts-link ${text}`} href="https://github.com/arturvolokhin" 
                                rel="noreferrer" target="_blank">arturvolokhin</a>
                        </li>

                        <li className="user__contacts-item">
                            <a 
                                class={`user__contacts-link ${text}`} 
                                href="mailto:artur.volokhin@mail.ru"
                            >
                                artur.volokhin@mail.ru
                            </a>
                        </li>
                    </ul>
                </article>
            )}
        </ThemeContext>
    )
}

export default UserContacts;