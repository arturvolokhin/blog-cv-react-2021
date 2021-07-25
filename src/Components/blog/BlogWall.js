import React, { useState } from "react";
import BlogPostEditModal from "./BlogPostEditModal";
import BlogPost from "./BlogPost";
import PropTypes from "prop-types";

const BlogWall = ({ authorization, updatePostsData, postsList }) => {
    const [toggleEditModal, setToggleEditModal] = useState(false);
    const [postData, setPostData] = useState(null);
    const [id, setId] = useState(null);
    const posts = [...postsList];
    const date = new Date().toJSON().slice(0, 10);

    const handleClickEdit = ({ target }) => {
        const post = posts.find((post) => post.id === target.id);
        setId(target.id);
        !toggleEditModal && setToggleEditModal(true);
        setPostData(post);
    };

    return (
        <section className="blog__wall">
            <h2 className="subtitle">Posts wall:</h2>
            {authorization.login === "admin" && (
                <p
                    className="blog__wall-delete"
                    onClick={() => updatePostsData([])}
                >
                    Delete all posts
                </p>
            )}
            {toggleEditModal && authorization && (
                <BlogPostEditModal
                    post={postData}
                    date={date}
                    toggleEditModal={setToggleEditModal}
                    posts={posts}
                    id={id}
                    updatePostsData={updatePostsData}
                />
            )}
            {posts.map((post, index) => {
                return (
                    <BlogPost
                        post={post}
                        posts={posts}
                        date={date}
                        id={post.id}
                        key={post.id}
                        updatePostsData={updatePostsData}
                        handleClickEdit={handleClickEdit}
                        authorization={authorization}
                    />
                );
            })}
        </section>
    );
};

BlogWall.propTypes = {
    updatePostsData: PropTypes.func,
    authorization: PropTypes.object,
};

export default BlogWall;
