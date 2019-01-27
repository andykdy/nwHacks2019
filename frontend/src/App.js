import React, { Component } from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import withStyles from "@material-ui/core/styles/withStyles";
import SideBar from "./components/SideBar";
import GoogleMap from "./components/GoogleMap";
import HiveModal from "./components/HiveModal"

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#3490ff"
        },
        secondary: {
            main: "#FF005E",
        },
    },
    typography: {
        useNextVariants: true,
    },

});

const styles = (theme) => createStyles({
    root: {
        color: "#123456",
    },
    mainBar:{
        width:window.innerWidth*0.7,
        marginLeft:window.innerWidth*0.3
    }
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "Andy",
        }
    }

    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={muiTheme}>
                    <SideBar username={this.state.userName}/>
                    <div className={this.props.classes.mainBar}>
                        <HiveModal/>
                        <GoogleMap/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(App);
