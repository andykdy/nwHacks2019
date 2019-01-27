import React, { Component } from 'react';
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden/Hidden";
import Drawer from "@material-ui/core/Drawer/Drawer";

const styles = (theme) => createStyles({
    drawer: {
        minWidth: 500
    },
    list: {
        width: window.innerWidth * 0.85
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
            <div className={this.props.classes.list}>
                <p>{this.props.username}</p>
            </div>
        );

        return (
            <div>
            <Hidden mdDown>
                <Drawer
                    //todo
                >
                    {sideList}
                </Drawer>
            </Hidden>
            <Hidden smUp>
                <SwipeableDrawer
                    open={this.state.open}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                    className={this.props.classes.drawer}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </Hidden>
            </div>
        );
    }
}

export default withStyles(styles)(SideBar);
