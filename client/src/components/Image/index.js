import React from "react";

function Image({ src}) {
    return (
        <div
            className="image"
            style={{
                backgroundImage: `url(${src})`
            }}
        />
    );
}

export default Image;