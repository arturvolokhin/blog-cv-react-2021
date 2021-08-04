import avatar from "../../images/avatar.jpg";
import PropTypes from "prop-types";

const Avatar = () => {
    return <img src={avatar} alt="avatar" width="350px"></img>;
};

Avatar.propTypes = {
    avatar: PropTypes.string,
};

export default Avatar;
