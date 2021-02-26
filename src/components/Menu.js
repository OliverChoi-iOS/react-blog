import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { HomeSharp, ListAlt, PermIdentity } from "@material-ui/icons";

function Menu(props) {
    return (
        <Drawer open={props.open} onClose={props.onClose}>
            <div className="menu-list">
                <List>
                    <ListItem button key={'home'} onClick={props.onHomeClick}>
                        <ListItemIcon> <HomeSharp /> </ListItemIcon>
                        <ListItemText>홈</ListItemText>
                    </ListItem>
                    <ListItem button key={'about'} onClick={props.onAboutClick}>
                        <ListItemIcon> <PermIdentity /> </ListItemIcon>
                        <ListItemText>소개</ListItemText>
                    </ListItem>
                    <ListItem button key={'postList'} onClick={props.onPostListClick}>
                        <ListItemIcon> <ListAlt /> </ListItemIcon>
                        <ListItemText>포스트</ListItemText>
                    </ListItem>
                    
                </List>
            </div>
        </Drawer>
    );
}

export default Menu;