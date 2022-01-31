import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const BrandBar = observer(() => {
    const {devices} = useContext(Context)
    console.log(devices.brands[1].id)
    return (
        <div className="d-flex flex-wrap">
            {devices.brands.map(brand =>
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => devices.setSelectedBrand(brand)}
                    border={brand.id === devices.selectedBrand.id? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;
