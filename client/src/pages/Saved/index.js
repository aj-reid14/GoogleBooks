import React, { Component } from 'react';
import { Row, Col, Container } from "../../components/Grid";
import axios from "axios";
import DeleteBookButton from '../../components/DeleteBookButton';
import { BookSearchResults, Book } from '../../components/BookSearchResults';
import "./style.css";

class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount = () => {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        axios.get("/api/books")
            .then(res => {
                this.setState({ books: res.data })
            })
            .catch(err => console.log(err));
    }

    deleteSavedBook = (id) => {
        axios.delete(`/api/books/${id}`)
            .then(() => {
                this.getSavedBooks();
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    {!(this.state.books.length > 0) ?
                        <div id="saved-books-label">
                            <h1>(No Books Saved)</h1>
                        </div>
                        :
                        <BookSearchResults>
                            {this.state.books.map(thisBook => {
                                return (
                                    <Container>
                                        <Book
                                            key={thisBook._id}
                                            title={thisBook.title}
                                            link={thisBook.link}                                            
                                            description={thisBook.description}
                                            authors={thisBook.authors}
                                            image={thisBook.image}
                                        />

                                        <DeleteBookButton
                                            onClick={() => this.deleteSavedBook(thisBook._id)}
                                        />
                                    </Container>
                                )
                            })}
                        </BookSearchResults>
                    }
                </Row>
            </Container>
        )
    }
}

export default Saved;