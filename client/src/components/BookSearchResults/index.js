import React, { Component } from "react";
import Image from "../Image";
import { Container, Row, Col } from "../Grid";
import "./style.css";

export function BookSearchResults({ children }) {
    return (
        <ul className="list-group">{children}</ul>
    )
}

export class Book extends Component {

    render() {
        return (
            <li>
                <div className="book-result container">
                    <Row>
                        <Image src={this.props.image} />
                    </Row>

                    <Row>
                        <h1>{this.props.title}</h1>
                    </Row>

                    <Row>
                        <h3>{this.props.authors.join(", ")}</h3>
                    </Row>

                    <Row>
                        <p>{this.props.description}</p>
                        <a target="_blank" href={this.props.link}>Click to View</a>
                    </Row>
                </div>
            </li>
        )
    }

}