import React, { Component } from "react";
import API from "../utils/API";
import CardSave from "../components/cardSave";

class Save extends Component {
  // Setting our component's initial state
  state = {
    books: []
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBookFromDataBase()
      .then(res =>
        // console.log(res.data)
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleView = id => {
    console.log(id)

  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">(React) Google Books Search</h1>
          </div>
        </div>

        <div className="container">
          <div style={{ width: "100%" }}>
            <p style={{ fontSize: 30, color: "black" }} className="text-center">
              Saved Book
            </p>

            {this.state.books.map(book => {
              console.log("book", book);
              return (
                <CardSave
                  key={book._id}
                  title={book.title}
                  author={book.author}
                  image={book.image}
                  description={book.description}
                  deleteBook={this.deleteBook}
                  link={book.link}
                  id={book._id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Save;
