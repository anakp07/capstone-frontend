import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
    console.log(props)
    const { color, landmark, perspective } = props;
    return (
        <div>
            <div className="pin bounce"
            style={{ backgroundColor: color, cursor: 'pointer'}}
            />
            {/* {landmark} */}
            {perspective}
            <div className="pulse" />
        </div> 
    );
};

export default Marker;