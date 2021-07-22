import React, { useState } from "react";
import Status from "./Status";
import NewPostField from "./NewPostField";
import BlogWall from "./BlogWall";
import { getLocalStorage, setLocalStorage } from "../api/localStorageApi";
import { v4 as id } from "uuid";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Blog = ({ authorization }) => {
    const [status, setStatus] = useState(getLocalStorage("status"));
    const [postsList, setPostsList] = useState(getLocalStorage("posts"));
    let uuid = id();

    const updatePostsData = (data) => {
        setLocalStorage("posts", data);
        setPostsList(data);
    };

    return (
        <section className="blog">
            <Status
                authorization={authorization}
                status={status}
                setStatus={setStatus}
            />
            <NewPostField updatePostsData={updatePostsData} id={uuid} />

            <Route
                path="/post"
                render={() => (
                    <BlogWall
                        updatePostsData={updatePostsData}
                        authorization={authorization}
                    />
                )}
            />
        </section>
    );
};

Blog.propTypes = {
    authorization: PropTypes.object,
};

export default Blog;
