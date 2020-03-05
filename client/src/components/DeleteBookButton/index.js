import React, { Component } from "react";

function DeleteBookButton(props) {

    return (
        <div>
            <button type="button" className="btn btn-lg btn-warning" {...props}>
                Delete Book
                </button>
        </div>
    )
}

export default DeleteBookButton;