import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
    fab: {
        position: "absolute",
        margin: theme.spacing.unit,
        zIndex: 3,
        bottom: theme.spacing.unit * 3,
        left: window.innerWidth > 600 ? window.innerWidth * 0.3 + theme.spacing.unit * 3 : theme.spacing.unit * 3,
        showModal: true,
    }
});

function AddHiveButton(props) {
    const { classes } = props;

    return (
        <div>
            <Fab onClick={props.triggerModal} color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon />
            </Fab>
        </div>
    );
}

export default withStyles(styles)(AddHiveButton);