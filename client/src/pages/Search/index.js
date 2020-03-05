import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Container } from "../../components/Grid";
import { BookSearchResults, Book } from "../../components/BookSearchResults";
import SaveBookButton from "../../components/SaveBookButton";
import "./style.css";

class Search extends Component {
    state = {
        searchQuery: "",
        searchResult: [],
        books: []
    };

    searchBooks = () => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}`;

        axios
            .get(url)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <div className="col-md-12">

                        <input
                            id="book-input"
                            className="form-control form-control-lg"
                            type="text"
                            name="searchQuery"
                            onChange={this.handleInputChange}
                        />

                        <button id="search-button" type="submit" onClick={this.searchBooks}>
                            Go
                        </button>

                        {!(this.state.books && this.state.books.length > 0) ? 
                        <div id="search-label">
                            <h1>Search for Books!</h1>
                        </div>
                        :
                        <BookSearchResults>
                            {this.state.books.map(thisBook => {
                                return (
                                    <Container>
                                        <Book
                                            key={thisBook.id}
                                            title={thisBook.volumeInfo.title}
                                            link={thisBook.volumeInfo.infoLink}                                            
                                            description={thisBook.volumeInfo.description ? thisBook.volumeInfo.description : "N/A"}
                                            authors={thisBook.volumeInfo.authors ? thisBook.volumeInfo.authors : ["N/A"]}
                                            image={thisBook.volumeInfo.imageLinks.thumbnail ? thisBook.volumeInfo.imageLinks.thumbnail : "#"}
                                        />

                                        <SaveBookButton
                                            title={thisBook.volumeInfo.title}
                                            link={thisBook.volumeInfo.infoLink}
                                            description={thisBook.volumeInfo.description ? thisBook.volumeInfo.description : "N/A"}
                                            authors={thisBook.volumeInfo.authors ? thisBook.volumeInfo.authors : ["N/A"]}
                                            image={thisBook.volumeInfo.imageLinks.thumbnail ? thisBook.volumeInfo.imageLinks.thumbnail : "#"}
                                        />
                                    </Container>
                                )
                            })}
                        </BookSearchResults>
                    }

                    </div>
                </Row>
            </Container>
        )
    }
}

export default Search;