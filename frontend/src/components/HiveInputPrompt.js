import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit*2,
        width: "100%",
    },
});

class HiveInputPrompt extends Component {

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-title-input"
                    label="Hive Title"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-description-input"
                    label="Hive Description"
                    onChange={this.handleChange('multiline')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </form>
        )
    }
}
HiveInputPrompt.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HiveInputPrompt);