import React, {Component} from 'react';
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden/Hidden";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider/Divider";

const styles = (theme) => createStyles({
    list: {
        width: window.innerWidth * 0.30,
        height: window.innerHeight,
        overflowX: "hidden"
    },
    listMobile: {
        width: window.innerWidth * 0.80,
        height: window.innerHeight
    },
    inside: {
        width: "100%",
        height: window.innerHeight,
        backgroundColor: "#4b6584"
    },
    header: {
        margin: "auto",
        backgroundColor: "#fed330",
    },
    logo: {
        marginLeft: -12,
        marginRight: 20,
    },
    avatar: {
        margin: "auto",
        width: 150,
        height: 150,
        marginBottom: theme.spacing.unit * 2
    },
    info: {
        marginLeft: theme.spacing.unit * 8,
        marginRight: theme.spacing.unit * 8
    },
    infoMobile: {
        marginLeft: theme.spacing.unit * 4,
        marginRight: theme.spacing.unit * 4
    },
    userInfo: {
        width: "85%",
        margin: "auto",
        marginBottom: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit * 4
    },
    userInfoMobile: {
        width: "100%",
        margin: "auto",
        marginBottom: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit * 4
    },
    badgeText: {
        margin: "auto"
    },
    gridList: {
        margin: "auto",
        width: "100%",
        flexGrow: 1
    },
    badgeIcons: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
});

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    toggleDrawer = (open) => () => {
        this.setState({open: open});
    };

    render() {
        const navBar = (
            <AppBar position="static" className={this.props.classes.header} color="primary">
                <Toolbar>
                    <Avatar className={this.props.classes.logo}>B</Avatar>
                    <Typography variant="h6">
                        The Big Buzz
                    </Typography>
                </Toolbar>
            </AppBar>
        );

        const badges = (
            <Grid container className={this.props.classes.gridList} spacing={16}>
                <Typography className={this.props.classes.badgeText} color="textSecondary" gutterBottom>
                    Badges:
                </Typography>
                <Grid item xs={12}>
                    <Grid
                        container
                        className={this.props.classes.gridList}
                        justify="center"
                        spacing={16}
                    >
                        {[  "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png",
                            "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png",
                            "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png",
                            "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png",
                            "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png",
                            "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png",
                            "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png",
                            "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png",
                            "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png",
                            "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png",
                            "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png",
                            "http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png"].map((value, index) => (
                            <Grid key={index} item>
                                <img className={this.props.classes.badgeIcons} src={value}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );

        const userInfo = (
            <div className={window.innerWidth > 600 ? this.props.classes.userInfo : this.props.classes.userInfoMobile}>
                <div className={this.props.classes.pic}>
                    <Avatar alt="Avatar" className={this.props.classes.avatar}>A</Avatar>
                </div>
                <List className={window.innerWidth > 600 ? this.props.classes.info : this.props.classes.infoMobile}>
                    <ListItem>
                        <Avatar alt={"User"}>U</Avatar>
                        <ListItemText primary="MyUserName12183" />
                    </ListItem>
                    <li>
                        <Divider />
                    </li>
                    <ListItem>
                        <Avatar src="https://t6.rbxcdn.com/b48f72a529e65f3b50c6a1a6f2711be1"/>
                        <ListItemText primary="176" />
                    </ListItem>
                    <li>
                        <Divider />
                    </li>
                    <ListItem>
                        <Avatar src="http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png"/>
                        <ListItemText primary="Queen Bee" />
                    </ListItem>
                </List>
            </div>
        );

        const sideList = (
            <div className={this.props.classes.inside}>
                {navBar}
                {userInfo}
                {badges}
             </div>
        );
        return (
            <div>
                <Hidden xsDown>
                    <Drawer
                        variant="permanent"
                        anchor="left"
                    >
                        <div className={this.props.classes.list}>
                            {sideList}
                        </div>
                    </Drawer>
                </Hidden>
                <Hidden mdUp>
                    <SwipeableDrawer
                        open={this.state.open}
                        onClose={this.toggleDrawer(false)}
                        onOpen={this.toggleDrawer(true)}
                        className={this.props.classes.drawer}
                    >
                        <div className={this.props.classes.listMobile}>
                            {sideList}
                        </div>
                    </SwipeableDrawer>
                </Hidden>
            </div>
        );
    }
}

export default withStyles(styles)(SideBar);
