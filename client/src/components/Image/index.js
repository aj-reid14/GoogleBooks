import React from "react";

function Image({ src }) {
    return (
        <div>
            <img className="image" src={src} />
        </div>
    );
}

export default Image;