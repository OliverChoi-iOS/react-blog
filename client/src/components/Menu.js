import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import { HomeSharp, ListAlt, PermIdentity } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    listItemText: {
        fontSize: '30px',
        fontFamily: 'nanumsquare',
        fontWeight: '600'
    }
}));

function Menu(props) {
    var classes = useStyles();
    return (
        <Drawer open={props.open} onClose={props.onClose}>
            <div className="menu-list">
                <List>
                    <ListItem button key={'home'} onClick={props.onHomeClick}>
                        <ListItemIcon> <HomeSharp fontSize='large'/> </ListItemIcon>
                        <ListItemText classes={{primary:classes.listItemText}}>홈</ListItemText>
                    </ListItem>
                    <ListItem button key={'about'} onClick={props.onAboutClick}>
                        <ListItemIcon> <PermIdentity fontSize='large'/> </ListItemIcon>
                        <ListItemText classes={{primary:classes.listItemText}}>소개</ListItemText>
                    </ListItem>
                    <ListItem button key={'postList'} onClick={props.onPostListClick}>
                        <ListItemIcon> <ListAlt fontSize='large'/> </ListItemIcon>
                        <ListItemText classes={{primary:classes.listItemText}}>포스트</ListItemText>
                    </ListItem>
                    
                </List>
            </div>
        </Drawer>
    );
}

export default Menu;