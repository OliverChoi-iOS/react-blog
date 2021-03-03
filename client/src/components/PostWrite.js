import { Fab, TextField, makeStyles, Box } from "@material-ui/core";
import { ArrowBack, Create } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    arrowBack: {
        marginBottom: '100px'
    },
    postTitle: {
        width: '80%',
        marginBottom: '50px'
    },
    postContent: {
        width: '80%'
    },
    submitBtn: {
        marginTop: '30px'
    }
}));

function PostWrite(props) {
    var [postTitle, setPostTitle] = useState(props.postTitle);
    var [postContent, setPostContent] = useState(props.postContent);

    const classes = useStyles();
    return (
        <section className="post-write">
            <Fab className={classes.arrowBack} color="first" area-label="back" onClick={props.onBackArrowClick}>
                <ArrowBack />
            </Fab>
            <Box display="flex" flexWrap="wrap">
                <TextField className={classes.postTitle} 
                           inputProps={{
                               style: {
                                   fontSize: 30,
                                   paddingTop: '20px'
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
                                   fontSize: 30,
                                   paddingTop: 20
                               }
                           }}
                           InputLabelProps={{
                               style: {
                                   fontSize: 30
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
            <Fab className={classes.submitBtn} color="primary" area-label="write" onClick={ console.log("test") }>
                <Create />
            </Fab>
            
        </section>
    );
}

export default PostWrite;