import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useState } from 'react';
import Post from './Post';

function PostList(props) {
    var postData = props.postData;
    var postList = postData.map((data) => 
        <Post postTitle={ data.postTitle } 
              postDate={ data.postDate } 
              postContent = { data.postContent }
              onPostClick={ props.onPostClick }/>
    );

    return (
        <section className="post-list">
            { postList }
            <Fab color="primary" aria-label="add">
                <Add/>
            </Fab>
        </section>
    );
}

export default PostList;