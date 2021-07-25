import React,{useState} from "react";
import Status from './Status';
import NewPostField from './NewPostField';
import BlogWall from './BlogWall';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Blog = () => {

    const statusValue = useSelector(({blog}) => blog.status);
    const [status, setStatus] = useState(statusValue);

    return(
        <section className="blog">
            <Status status={status} setStatus={setStatus}/>
            <NewPostField/>
            <BlogWall/>
        </section>
    )
}

Blog.propTypes = {
    authorization: PropTypes.object
};

export default Blog;