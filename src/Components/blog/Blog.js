import React,{useState} from "react";
import Status from './Status';
import NewPostField from './NewPostField';
import BlogWall from './BlogWall';
import { getLocalStorage, setLocalStorage} from '../api/localStorageApi';
import { v4 as id } from 'uuid';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Blog = ({authorization}) => {

    const statusValue = useSelector(({blog}) => blog.value.status);
    const posts = useSelector(({blog}) => blog.value.posts)
    const [status, setStatus] = useState(statusValue);
    const [postsList, setPostsList] = useState(getLocalStorage('posts'));
 
    
    let uuid = id();

    const updatePostsData = (data) => {
        setLocalStorage('posts', data);
        setPostsList(data);
    }

    return(
        <section className="blog">
            <Status authorization={authorization} status={status} setStatus={setStatus}/>
            <NewPostField 
                updatePostsData={updatePostsData} 
                posts={posts}
                id={uuid}
            />
            <BlogWall 
                posts={posts}
                updatePostsData={updatePostsData} 
                authorization={authorization}
            />
        </section>
    )
}

Blog.propTypes = {
    authorization: PropTypes.object
};

export default Blog;