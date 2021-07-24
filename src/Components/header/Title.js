import React from "react";
import PropTypes from "prop-types";

const Title = ({ icon }) => {
    return (
        <div className="title">
            <img
                className="title__icon"
                src={icon}
                alt="icon"
                width="40px"
            ></img>
            <h1 className="title__text">Artur's V. Blog</h1>
        </div>
    );
};

Title.propTypes = {
    icon: PropTypes.string,
};

export default Title;
