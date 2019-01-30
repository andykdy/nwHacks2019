import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

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

const CREATE_HIVE = gql`
    mutation CreateHive($title: String!, $lat: Float!, $lon: Float!, $description: String!, $username: ID!) {
        createHive(
            title: $title, 
            location: {
                lat: $lat, 
                lon: $lon
            }, 
            description: $description,
            user: $username
        ) {
            key
            title
        }
    }
`;

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

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Mutation mutation={CREATE_HIVE}>
                    {(createHive) => {
                        const ssss = (e) => {
                            e.preventDefault();
                            createHive({ variables: {
                                    username: this.props.user.name,
                                    title: this.state.title,
                                    description: this.state.description,
                                    lat: this.props.user.lat,
                                    lon: this.props.user.lon
                                }});

                            this.props.handleClose();
                        };

                        return (
                            <form className={classes.container} onSubmit={ssss}>
                                <Typography className={this.props.classes.label} variant={"h5"}>
                                    Create Hive
                                </Typography>
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
                                <Button onClick={this.props.handleClose}>Close</Button>
                                <Button onClick={ssss} color={"primary"} variant={"contained"} className={this.props.classes.submit}>Submit</Button>
                            </form>
                        );
                    }}
                </Mutation>
            </div>
        )
    }
}

export default withStyles(styles)(HiveInputPrompt);