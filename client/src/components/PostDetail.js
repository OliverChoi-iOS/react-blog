import { Fab, makeStyles, Typography } from '@material-ui/core';
import { ArrowBack, Delete, Edit } from '@material-ui/icons';

const useButtonStyles = makeStyles({
    root: {
        marginTop: '60px',
        marginRight: '60px'
    }
});

function PostDetail(props) {
    const classes = useButtonStyles();
    var postTitle = props.postTitle;
    var postDate = props.postDate;
    var postContent = props.postContent;

    return (
        <section className="post-detail">
            <Fab color="first" area-label="back" onClick={props.onBackArrowClick}>
                <ArrowBack/>
            </Fab>
            <article>
                <h1>{ postTitle }</h1>
                <p>{ postDate }</p>
                <Typography>
                { postContent }
                </Typography>
            </article>
            <Fab aria-label="edit" classes={{root: classes.root}}>
                <Edit/>
            </Fab>
            <Fab color="secondary" aria-label="remove" classes={{root: classes.root}}>
                <Delete/>
            </Fab>
        </section>
    );
}

export default PostDetail;