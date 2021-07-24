import PropTypes from "prop-types";

const Avatar = ({ avatar }) => {
    return <img src={avatar} alt="avatar" width="300px"></img>;
};

Avatar.propTypes = {
    avatar: PropTypes.string,
};

export default Avatar;
