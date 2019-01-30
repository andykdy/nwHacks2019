import React, { Component } from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import withStyles from "@material-ui/core/styles/withStyles";
import SideBar from "./components/SideBar";
import SimpleMap from "./components/SimpleMap";
import HiveModal from "./components/HiveModal"
import ApolloClient from "apollo-boost";
import {ApolloProvider, Query} from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql"
});

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

const GET_USER = gql`
    {
        user(id: "dave") {
            points
            rank
            badges
          }
    }
`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "dave",
            lat: 49.28,
            lon: -123.26
        }
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <MuiThemeProvider theme={muiTheme}>
                    <Query query={GET_USER} variables={{ id: this.state.username }}>
                        {({ loading, error, data }) => {
                            if (loading) console.log("loading user data");
                            if (error) console.error(error.message);

                            if (data !== undefined && data.user !== undefined) {
                                const {points, badges, rank} = data.user;
                                return <SideBar username={this.state.username} points={points} badges={badges} rank={rank}/>
                            }
                            return <div> </div>;
                        }}
                    </Query>
                    <div className={window.innerWidth > 600 ? this.props.classes.mainBar : this.props.classes.mainBarMobile}>
                        <HiveModal user={{name: this.state.username, lat: this.state.lat, lon: this.state.lon}} />
                        <SimpleMap />
                    </div>
                </MuiThemeProvider>
            </ApolloProvider>
        );
    }
}

export default withStyles(styles)(App);
