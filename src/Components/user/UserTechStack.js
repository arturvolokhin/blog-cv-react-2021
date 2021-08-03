import html from '../../images/icons/html.svg';
import css from '../../images/icons/css.svg';
import js from '../../images/icons/js.svg';
import react from '../../images/icons/react.svg';
import redux from '../../images/icons/redux.svg';
import git from '../../images/icons/git.svg';
import webpack from '../../images/icons/webpack.svg';
import npm from '../../images/icons/npm.svg';

const UserTechStack = () => {
    return (
        <article className="section user__stack">
            <h2 className="subtitle">My technologies stack</h2>
            <ul className="user__stack-list user__stack-list--up">
                <li className="user__stack-item"><img src={html} alt="html-icon"/></li>
                <li className="user__stack-item"><img src={css} alt="css-icon"/></li>
                <li className="user__stack-item"><img src={js} alt="js-icon"/></li>
                <li className="user__stack-item"><img src={git} alt="git-icon"/></li>
                <li className="user__stack-item"><img src={webpack} alt="webpack-icon"/></li>
                <li className="user__stack-item"><img src={react} alt="react-icon"/></li>
                <li className="user__stack-item"><img src={redux} alt="redux-icon"/></li>
                <li className="user__stack-item"><img src={npm} alt="npm-icon"/></li>
            </ul>
        </article>
    );
};

export default UserTechStack;
