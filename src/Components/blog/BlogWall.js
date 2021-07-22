import React, { useState } from "react";
import BlogPostEditModal from "./BlogPostEditModal";
import BlogPost from "./BlogPost";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deletePosts, PaintEditPost } from "../../redux/blogSlice";

const BlogWall = ({ updatePostsData, posts }) => {
    const [toggleEditModal, setToggleEditModal] = useState(false);
    const [id, setId] = useState(null);
    const date = new Date().toJSON().slice(0, 10);
    const dispatch = useDispatch();
    const postData = useSelector(({ blog }) => blog.postEditData);
    const authorization = useSelector(({ auth }) => auth.authorizedUser);

    const handleClick = () => {
        dispatch(deletePosts());
    };

    const handleClickEdit = ({ target }) => {
        setId(target.id);
        console.log(target.id);
        dispatch(PaintEditPost(target.id));
        !toggleEditModal && setToggleEditModal(true);
    };

    return (
        <section className="blog__wall">
            <h2 className="subtitle">Posts wall:</h2>
            {authorization.login === "admin" && (
                <p className="blog__wall-delete" onClick={handleClick}>
                    Delete all posts
                </p>
            )}
            {toggleEditModal && (
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
                        key={index}
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
