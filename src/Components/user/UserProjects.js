const UserProjects = () => {
    return(
        <section class="section projects">
            <h2 className="subtitle">My projects:</h2>
            <ul className="projects__list">
                
                    <ol className="projects__sublist">
                        <li className="projects__list-title">Html + Css:</li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/dashboard"
                                target="_blank">
                                Dashboard 
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/Konstruct"
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
                                target="_blank">
                                Weather app
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/kanban"
                                target="_blank">
                                Kanban app
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/tic-tac-toe"
                                target="_blank">
                                Tic-tac-toe
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/arturvolokhin.github.io"
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
                                target="_blank">
                                Weather app
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/myBlog-react"
                                target="_blank">
                                My blog
                            </a>
                        </li>
                        <li className="projects__item">
                            <a 
                                className="projects__item-link" 
                                href="https://github.com/arturvolokhin/todo-react"
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