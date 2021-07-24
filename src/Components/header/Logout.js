import { setLocalStorage } from "../../utils/localStorage";
import Button from "../Button";
import PropTypes from "prop-types";

const Logout = ({ setAuthorization }) => {
    const handleClick = () => {
        setLocalStorage("authorizedUser", false);
        setAuthorization(false);
    };

    return <Button onClick={handleClick} value={"Logout"} />;
};

Logout.propTypes = {
    setAuthorization: PropTypes.func,
};

export default Logout;
