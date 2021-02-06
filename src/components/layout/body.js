import React from 'react';

const Body = (props) => {
    return <div className="w-100" style={{ padding: "0 5%" }}>{props.children}</div>;
};

export default Body;