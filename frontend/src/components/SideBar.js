import React, {Component, IntrinsicElements as tileData} from 'react';
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

const styles = (theme) => createStyles({
    list: {
        width: window.innerWidth * 0.30,
        backgroundColor: "#FEEEAE",
        height: "100%",
        overflowX: "hidden"
    },
    listMobile: {
        width: window.innerWidth * 0.30,
        backgroundColor: "#FEEEAE",
        height: "100%"
    },
    inside: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FEEEAE",
        overflowX: "hidden"
    },
    header: {
        margin: "auto",
        backgroundColor: "#63cdda",
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    pic: {
        padding: 20,
        paddingTop: 50,
    },
    avatar: {
        margin: "auto",
        width: 150,
        height: 150,
    },
    info: {
        padding: 20
    },
    badges: {
        margin: "auto"
    },
    gridList: {
        padding: 5,
        paddingBottom: 20,
        flexGrow: 1
    },
    paper: {
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
        const sideList = (
            <div className={this.props.classes.inside}>
                <AppBar position="static" className={this.props.classes.header} color="default">
                    <Toolbar>
                        <Avatar className={this.props.classes.menuButton} color="inherit" aria-label="Menu" src="https://cdn.iconscout.com/icon/free/png-256/honeybee-bee-insect-honey-bug-33902.png"/>
                        <Typography variant="h6" color="inherit">
                            The Big Buzz
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={this.props.classes.pic}><Avatar alt="Remy Sharp" src="http://files.softicons.com/download/culture-icons/avatar-minis-icons-by-joumana-medlej/ico/Appa.ico" className={this.props.classes.avatar} /></div>
                <List className={this.props.classes.info}>
                    <ListItem>
                        <Avatar src="https://cdn.iconscout.com/icon/free/png-256/honeybee-bee-insect-honey-bug-33902.png"/>
                        <ListItemText primary="MyUserName12183" />
                    </ListItem>
                    <ListItem>
                        <Avatar src="https://t6.rbxcdn.com/b48f72a529e65f3b50c6a1a6f2711be1"/>
                        <ListItemText primary="176" />
                    </ListItem>
                    <ListItem>
                        <Avatar src="http://www.myiconfinder.com/uploads/iconsets/c9dc8a51f251cff1546e099b1dc4e91a-trophy.png"/>
                        <ListItemText primary="Queen Bee" />
                    </ListItem>
                </List>

                <Grid container className={this.props.classes.gridList} spacing={16}>
                    <Typography className={this.props.classes.badges} color="textSecondary" gutterBottom>
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
                                    <img className={this.props.classes.paper} src={value}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>


             </div>
        );
        return (
            <div>
                <Hidden smDown>
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
