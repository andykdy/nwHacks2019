import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddHiveButton from "./AddHiveButton";
import Button from '@material-ui/core/Button';
import HiveInputPrompt from "./HiveInputPrompt";
import Typography from "@material-ui/core/Typography/Typography";



function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        left: window.innerWidth*0.3,
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
    modal: {
        top:'50%',
        left: '50%',
        transform:'translate(-50%, -50%)',
    },
});

class SimpleModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            title: "",
            description:"",
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <AddHiveButton triggerModal={this.handleOpen}/>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <HiveInputPrompt handleClose={this.handleClose}/>
                        </div>
                </Modal>
            </div>
        );
    }
}



export default withStyles(styles)(SimpleModal);