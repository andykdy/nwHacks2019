import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    fab: {
        position: 'absolute',
        margin: theme.spacing.unit,
        zIndex:3,
        bottom:0,
        left:0,
    },
});

function AddUserButton(props) {
    const { classes } = props;
    return (
        <div>
            <Fab color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon />
            </Fab>

        </div>
    );
}

AddUserButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddUserButton);