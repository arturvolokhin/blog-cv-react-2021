import React,{useState} from "react";
import Status from './Status';
import NewPostField from './NewPostField';
import BlogWall from './BlogWall';
import { v4 as id } from 'uuid';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Blog = () => {

    const statusValue = useSelector(({blog}) => blog.status);
    const posts = useSelector(({blog}) => blog.posts)
    const [status, setStatus] = useState(statusValue);
 
    let uuid = id();

    return(
        <section className="blog">
            <Status status={status} setStatus={setStatus}/>
            <NewPostField 
                posts={posts}
                id={uuid}
            />
            <BlogWall 
                posts={posts}
            />
        </section>
    )
}

Blog.propTypes = {
    authorization: PropTypes.object
};

export default Blog;