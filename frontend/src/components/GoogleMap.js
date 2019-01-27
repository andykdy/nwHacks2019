import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";


class SimpleMap extends Component {
    hiveLists = () => {
        let hiveList = this.props.hiveList();

        let retArry = [];
        if (hiveList.length !== 0) {
            hiveList.map((hive, i) => {
                retArry.push(
                    <Tooltip lat={hive.location.lat} lng={hive.location.lon} title={hive.name}>
                        <IconButton>
                            <img
                                src={"https://raw.githubusercontent.com/andykdy/nwHacks2019/frontend/frontend/images/hive.png"}
                                style={{height: 30, width: 30}}>
                            </img>
                        </IconButton>
                    </Tooltip>
                );
            })
        }
        console.log(retArry);
        return retArry;

    };

    render() {
        let hiveList = this.props.hiveList();
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: window.innerHeight, width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:"AIzaSyBZ_DclHQNZ1AdsJBuiUgVIRLD9XgpIUYI" }}
                    defaultCenter={{
                        lat: 49.26,
                        lng: -123.25
                    }}
                    defaultZoom={15}
                >
                    {hiveList.length > 0 ?
                        hiveList.map((hive, i) => {
                            return(
                                <Tooltip lat={hive.location.lat} lng={hive.location.lon} title={hive.name}>
                                    <IconButton>
                                        <img
                                            src={"https://raw.githubusercontent.com/andykdy/nwHacks2019/frontend/frontend/images/hive.png"}
                                            style={{height: 30, width: 30}}>
                                        </img>
                                    </IconButton>
                                </Tooltip>
                            );
                        }) :
                    <div> </div>}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
