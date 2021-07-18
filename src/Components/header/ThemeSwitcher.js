import { ThemeContext } from "../../context/ThemeProvider";

const ThemeSwitch = () => {
    return(
        <ThemeContext>
            {context => (
                <label className="switch">
                    <input onClick={context.toggle} className="switch__checkbox" type="checkbox"/>
                    <span className="switch__slider"/>
                </label>
            )}
        </ThemeContext>
    )
}

export default ThemeSwitch;