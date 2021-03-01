import { Divider } from '@material-ui/core';

function Post(props) {
    var postTitle = props.postTitle;
    var postDate = props.postDate;
    var postContent = props.postContent;

    return (
        <article className="post" 
                 onClick={ () => { 
                     props.onPostClick(postTitle, postDate, postContent);
                 }}>
            <h3>{ postTitle }</h3>
            <p>{ postDate }</p>
            <Divider />
        </article>
    );
}

export default Post;