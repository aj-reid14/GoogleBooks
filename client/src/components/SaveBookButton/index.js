import React, { Component } from "react";
import axios from "axios";

class SaveBookButon extends Component {

    saveBook = (props) => {

    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-lg btn-success" onClick={() => (this.saveBook(this.props))}>
                    Save Book
                    </button>
            </div>
        )
    }

}

export default SaveBookButon;