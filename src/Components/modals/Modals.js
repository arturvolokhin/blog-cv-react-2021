import React, { useState } from "react";
import ModalLogin from "./ModalLogin";
import ModalRegistration from "./ModalRegistration";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const Modals = ({ setAuthorization }) => {
    return (
        <>
            <Route path="/registration" render={() => <ModalRegistration />} />

            <Route
                path="/auth"
                render={() => (
                    <ModalLogin setAuthorization={setAuthorization} />
                )}
            />
        </>
    );
};

Modals.propTypes = {
    setAuthorization: PropTypes.func,
    toggleLoginModal: PropTypes.func,
    isLoginModal: PropTypes.bool,
};

export default Modals;
