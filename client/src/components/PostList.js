import { CircularProgress, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Post from './Post';

async function getPosts() {
    const response = await fetch('/api/posts');
    const responseData = await response.json();
    return responseData;
  }

function PostList(props) {
    var [postData, setPostData] = useState('');

    useEffect(() => {
        getPosts().then(res => setPostData(res))
                  .catch(err => console.log(err));
    }, []);

    var postList = postData ? postData.map((data) => 
        <Post postTitle={ data.postTitle } 
              postDate={ data.postDate } 
              postContent = { data.postContent }
              onPostClick={ props.onPostClick }/>
    ) : '';
    
    var buttons = postList ? <Fab color="primary" aria-label="add" onClick={props.onAddClick}>
                                 <Add/>
                             </Fab> : <CircularProgress />;

    return (
        <section className="post-list">
            { postList }
            { buttons }
        </section>
    );
}

export default PostList;