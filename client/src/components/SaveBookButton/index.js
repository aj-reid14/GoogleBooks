import React, { Component } from "react";
import axios from "axios";

class SaveBookButon extends Component {

    saveBook = (thisBook) => {
        let book = {
            title: thisBook.title,
            link: thisBook.link,
            image: thisBook.image,
            description: thisBook.description,
            authors: thisBook.authors            
        }

        axios.post("/api/books", book)
        .then(() => alert(`${thisBook.title} has been saved.`))
        .catch(err => console.log(err));
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