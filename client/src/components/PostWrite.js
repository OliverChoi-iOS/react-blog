import { Fab, TextField, makeStyles, Box } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    divider: {
        margin: '1%'
    },
    postTitle: {
        width: '50%',
        marginBottom: '50px'
    },
    postContent: {
        width: '100%'
    }
}));

function PostWrite(props) {
    var [postTitle, setPostTitle] = useState('');
    var [postContent, setPostContent] = useState('');

    const classes = useStyles();
    return (
        <section className="post-write">
            <Fab color="first" area-label="back" onClick={props.onBackArrowClick}>
                <ArrowBack />
            </Fab>
            <br/><br/>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                <TextField className={classes.postTitle} 
                           inputProps={{
                               style: {
                                   fontSize: 30
                               }
                           }}
                           InputLabelProps={{
                               style: {
                                  fontSize: 30
                               }
                           }}
                           value={postTitle}
                           id="standard-size-normal"
                           label="제목"
                           onChange={(e) => {setPostTitle(e.target.value)}}
                        />
                
                <TextField className={classes.postContent}
                           inputProps={{
                               style: {
                                   fontSize: 30
                               }
                           }}
                           InputLabelProps={{
                               style: {
                                   fontSize: 30,
                                   paddingBottom: '50px'
                               }
                           }}
                           value={postContent}
                           id="standard-multiline-static"
                           label="내용"
                           onChange={(e) => {setPostContent(e.target.value)}}
                           multiline
                           rows={10}
                        />
            </Box>
            
            
        </section>
    );
}

export default PostWrite;