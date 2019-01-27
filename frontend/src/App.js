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
    mainBar: {
        width: window.innerWidth * 0.7,
        marginLeft: window.innerWidth * 0.3
    },
    mainBarMobile: {
        width: "100%",
        marginLeft: 0
    }
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "Andy",
            points: 0,
            badges: [],
            rank: "",
            currentLocation: {
                lat: 0,
                lon: 0,
                radius: 0
            },
            hiveList: [],
        }
    }

    componentDidMount() {
        this.getProfile(this.state.userName);
    }

    getProfile = (username) => {
        let request = new XMLHttpRequest();
        let url = "http://localhost:8080/user/" + username;

        request.open("GET", url, true);

        request.onload = () => {
            let response = JSON.parse(request.responseText);
            if (request.status === 200) {
                this.setState({
                    username: response.userID,
                    points: response.points,
                    badges: response.badges,
                    rank: response.rank,
                })
            } else {
                console.error(response.error);
            }
        };

        request.onerror = function() {
            let response = JSON.parse(request.responseText);
            console.error(response.error);
        };

        request.setRequestHeader("Content-Type", "application/json");
        request.send();
    };

    loadHiveList = (hiveList) => {
        this.setState({hiveList: hiveList});
    };

    getData = () => {
        return {
            username: this.state.username,
            location: this.state.currentLocation
        };
    };

    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={muiTheme}>
                    <SideBar username={this.state.userName} points={this.state.points} badges={this.state.badges} rank={this.state.rank} />
                    <div className={window.innerWidth > 600 ? this.props.classes.mainBar : this.props.classes.mainBarMobile}>
                        <HiveModal loadHiveList={this.loadHiveList} getData={this.getData} />
                        <GoogleMap/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(App);
