import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    label: {
        width: "100%",
        variant: "h1",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit*2,
        width: "100%",
    },
    submit: {
        position: "absolute",
        right: theme.spacing.unit *5,
        bottom: theme.spacing.unit *4,
    },
});

class HiveInputPrompt extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.props.getData();
        console.log(this.state.title);
        console.log(this.state.description);
        this.addHive(this.state.title, this.state.description, data.username, data.location);
    };

    addHive = (title, description, username, location) => {
        let request = new XMLHttpRequest();
        let url = "http://localhost:8080/hive";

        request.open("POST", url, true);

        request.onload = () => {
            let response = request.responseText;
            if (request.status === 200 || request.status === 201) {
                this.props.loadHiveList(response);
            } else {
                console.error(response);
            }
        };

        request.onerror = function() {
            console.error(request.responseText);
        };

        request.setRequestHeader("Content-Type", "application/json");

        const data = {
            title: title,
            description: description,
            username: username,
            location: location
        };

        console.log(data);

        request.send(JSON.stringify(data));
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography className={this.props.classes.label} variant={"h4"}>
                    Create Hive
                </Typography>
                <form className={classes.container} onSubmit={this.handleSubmit}>
                    <TextField
                        id="outlined-title-input"
                        label="Hive Title"
                        className={classes.textField}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange("title")}
                    />
                    <TextField
                        id="outlined-description-input"
                        label="Hive Description"
                        onChange={this.handleChange("description")}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button onClick={this.props.handleClose}> Close </Button>
                    <Button onClick={this.handleSubmit} color={"primary"} variant={"contained"} className={this.props.classes.submit}> Submit </Button>
                </form>
            </div>
        )
    }
}
HiveInputPrompt.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HiveInputPrompt);