import React, { useState } from "react";
import ModalLogin from "./ModalLogin";
import ModalRegistration from "./ModalRegistration";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Modals = ({ setAuthorization, toggleLoginModal, isLoginModal }) => {
    const [isRegistrationModal, setIsRegistrationModal] = useState(false);

    const toggleRegistrationModal = () => {
        setIsRegistrationModal(!isRegistrationModal);
    };

    return (
        <Router>
            <ModalRegistration
                toggleLoginModal={toggleLoginModal}
                isRegistrationModal={isRegistrationModal}
                toggleRegistrationModal={toggleRegistrationModal}
            />
            <Switch>
                <Route
                    path="/auth"
                    render={() => (
                        <ModalLogin
                            isLoginModal={isLoginModal}
                            toggleLoginModal={toggleLoginModal}
                            setAuthorization={setAuthorization}
                            toggleRegistrationModal={toggleRegistrationModal}
                        />
                    )}
                />
            </Switch>
        </Router>
    );
};

Modals.propTypes = {
    setAuthorization: PropTypes.func,
    toggleLoginModal: PropTypes.func,
    isLoginModal: PropTypes.bool,
};

export default Modals;
