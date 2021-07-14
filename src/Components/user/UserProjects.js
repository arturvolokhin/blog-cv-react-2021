const UserProjects = () => {
    return(
        <section className="section projects">
            <h2 className="subtitle">My projects:</h2>
            <ul className="projects__list">
                
                    <ol className="projects__sublist">
                        <li className="projects__list-title">Html + Css:</li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/dashboard"
                                rel="noreferrer"
                                target="_blank">
                                
                                Dashboard 
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/Konstruct"
                                rel="noreferrer"
                                target="_blank">
                                Landing page
                            </a>
                        </li>
                    </ol>
                
                    <ol className="projects__sublist">
                        <li className="projects__list-title">JavaScript:</li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/weather-app"
                                rel="noreferrer"
                                target="_blank">
                                Weather app
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/kanban"
                                rel="noreferrer"
                                target="_blank">
                                Kanban app
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/tic-tac-toe"
                                rel="noreferrer"
                                target="_blank">
                                Tic-tac-toe
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/arturvolokhin.github.io"
                                rel="noreferrer"
                                target="_blank">
                                Landing page
                            </a>
                        </li>
                    </ol>
                
                    <ol className="projects__sublist">
                        <li className="projects__list-title">React:</li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/weather-app-react"
                                rel="noreferrer"
                                target="_blank">
                                Weather app
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/myBlog-react"
                                rel="noreferrer"
                                target="_blank">
                                My blog
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/todo-react"
                                rel="noreferrer"
                                target="_blank">
                                Todo
                            </a>
                        </li>
                    </ol>
            </ul>
        </section>
    )
}

export default UserProjects;