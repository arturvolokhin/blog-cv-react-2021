import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Status from './Status';
import NewPostField from './NewPostField';
import BlogWall from './BlogWall';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

function Blog({ authorization }) {
  const [status, setStatus] = useState(getLocalStorage('status'));
  const [postsList, setPostsList] = useState(getLocalStorage('posts'));

  const updatePostsData = (data) => {
    setPostsList(data);
    setLocalStorage('posts', data);
  };

  return (
    <section className="blog">
      <Status authorization={authorization} status={status} setStatus={setStatus} />
      <NewPostField updatePostsData={updatePostsData} id={uuid()} postsList={postsList} />
      <BlogWall
        postsList={postsList}
        updatePostsData={updatePostsData}
        authorization={authorization}
      />
    </section>
  );
}

export default Blog;
