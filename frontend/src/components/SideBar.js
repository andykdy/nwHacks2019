import React, { Component } from 'react';
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden/Hidden";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

const styles = (theme) => createStyles({
    list: {
        width: window.innerWidth * 0.25,
        backgroundColor: "#321878",
        height: "100%"
    },
    listMobile: {
        width: window.innerWidth * 0.85,
        backgroundColor: "#789323",
        height: "100%"
    },
    inside: {
        width: "100%",
        height: "100%",
        backgroundColor: "#32ffff",
        alignCenter: Avatar
    },
    avatar: {
        margin: 10,
        width: 150,
        height: 150,
    },
    fab: {
        margin: theme.spacing.unit,
    }
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
                <Avatar alt="Remy Sharp" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" className={this.props.classes.avatar} />


                <Fab color="primary" aria-label="Add" className={this.props.classes.fab}>
                    <AddIcon />
                </Fab>
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
