import React, { Component } from 'react';
import { Map, Circle, TileLayer } from "react-leaflet"
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Popup from "react-leaflet/es/Popup";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const styles = (theme) => createStyles({
    map: {
        width: window.innerWidth > 600 ? window.innerWidth * 0.7 : window.innerWidth,
        height: window.innerHeight,
        zIndex: 0
    }
});

const GET_HIVES = gql`
    {
        hives {
            key
            title
            description
            created_by
            date_created
            location {
                lat
                lon
            }
        }
    }
`;

class SimpleMap extends Component {
    render() {
        const center = [49.26, -123.25];
        return (
            <Map center={center} zoom={18} className={this.props.classes.map}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Query query={GET_HIVES} pollInterval={30000}>
                    {({ loading, error, data }) => {
                        if (loading) {
                            console.log("Loading...");
                        }
                        if (error) {
                            console.error("error");
                        }

                        if (data === undefined || data.hives === undefined) {
                            return <div> </div>;
                        } else {
                            return (
                                <div>
                                    {data.hives.map((hive, i) => {
                                        const { title, description, created_by, date_created, location } = hive;
                                        const hive_center = [location.lat, location.lon];

                                        return (
                                            <Circle center={hive_center} fillColor={"#3498db"} radius={35} key={i}>
                                                <Popup>
                                                    <p>title: {title}</p>
                                                    <p>description: {description}</p>
                                                    <p>created by: {created_by}</p>
                                                    <p>date created: {date_created}</p>
                                                </Popup>
                                            </Circle>
                                        );
                                    })}
                                </div>
                            );
                        }
                    }}
                </Query>
            </Map>
        );
    }
}

export default withStyles(styles)(SimpleMap);
