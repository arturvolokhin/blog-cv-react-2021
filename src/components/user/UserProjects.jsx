import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

const UserProjects = () => {
  const { text } = useContext(ThemeContext);

  return (
    <section className="section projects">
      <h2 className="subtitle">My projects:</h2>
      <ul className="projects__list">
        <ol className="projects__sublist">
          <li className={`projects__list-title ${text}`}>Html + Css:</li>
          <li className="projects__item">
            <a
              className={`projects__item-link ${text}`}
              href="https://github.com/arturvolokhin/dashboard"
              rel="noreferrer"
              target="_blank"
            >
              Dashboard
            </a>
          </li>
          <li className="projects__item">
            <a
              className={`projects__item-link ${text}`}
              href="https://github.com/arturvolokhin/Konstruct"
              rel="noreferrer"
              target="_blank"
            >
              Landing page
            </a>
          </li>
        </ol>

        <ol className="projects__sublist">
          <li className={`projects__list-title ${text}`}>JavaScript:</li>
          <li className="projects__item">
            <a
              className={`projects__item-link ${text}`}
              href="https://github.com/arturvolokhin/weather-app"
              rel="noreferrer"
              target="_blank"
            >
              Weather app
            </a>
          </li>
          <li className="projects__item">
            <a
              className={`projects__item-link ${text}`}
              href="https://github.com/arturvolokhin/kanban"
              rel="noreferrer"
              target="_blank"
            >
              Kanban app
            </a>
          </li>
          <li className="projects__item">
            <a
              className={`projects__item-link ${text}`}
              href="https://github.com/arturvolokhin/tic-tac-toe"
              rel="noreferrer"
              target="_blank"
            >
              Tic-tac-toe
            </a>
          </li>
          <li className="projects__item">
            <a
              className={`projects__item-link ${text}`}
              href="https://github.com/arturvolokhin/arturvolokhin.github.io"
              rel="noreferrer"
              target="_blank"
            >
              Landing page
            </a>
          </li>
        </ol>

        <ol className="projects__sublist">
          <li className={`projects__list-title ${text}`}>React:</li>
          <li className="projects__item">
            <a
              className={`projects__item-link ${text}`}
              href="https://github.com/arturvolokhin/icecream-shop-react"
              rel="noreferrer"
              target="_blank"
            >
              Ice cream shop
            </a>
          </li>
          <li className="projects__item">
            <a
              className={`projects__item-link ${text}`}
              href="https://github.com/arturvolokhin/weather-app-react"
              rel="noreferrer"
              target="_blank"
            >
              Weather app
            </a>
          </li>
          <li className="projects__item">
            <a
              className={`projects__item-link ${text}`}
              href="https://github.com/arturvolokhin/myBlog-react"
              rel="noreferrer"
              target="_blank"
            >
              My blog
            </a>
          </li>
          <li className="projects__item">
            <a
              className={`projects__item-link ${text}`}
              href="https://github.com/arturvolokhin/todo-react"
              rel="noreferrer"
              target="_blank"
            >
              Todo
            </a>
          </li>
        </ol>
      </ul>
    </section>
  );
};

export default UserProjects;
