import React, {useContext} from 'react';
import {Context} from "../index";
import DeviceItem from "./DeviceItem";
import {observer} from "mobx-react-lite";

const DeviceList = observer(() => {
    const {devices} = useContext(Context)
    return (
        <div className="d-flex flex-wrap">
            {devices.devices.map((device) =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </div>
    );
});

export default DeviceList;
