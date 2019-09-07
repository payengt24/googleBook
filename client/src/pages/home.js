import React, { Component } from "react";
import API from "../utils/API";
import CardSearch from "../components/cardSearch";

class Home extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    searchBook: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // // Loads all books  and sets them to this.state.books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadBooks = () => {
    API.getBooks(this.state.searchBook)
      .then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.loadBooks();
  };



  handleSaveBook = id => {
    console.log("id", id);
    const book = this.state.books.find(book => book.id === id);

    console.log(book);
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      image: book.volumeInfo.imageLinks.thumbnail,
      description: book.volumeInfo.description
    })
      .then(() => this.loadBooks())
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">(React) Google Books Search</h1>
            <p>Search for and Save Books of Interest</p>
          </div>

          <div className="container">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Search Book"
                  value={this.state.searchBook}
                  name="searchBook"
                  onChange={this.handleInputChange}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={this.handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="container">
          <div style={{ width: "100%" }}>
            <p style={{ fontSize: 30, color: "black" }} className="text-center">
              Searched Book Result
            </p>

            {this.state.books.map(book => {
              //  console.log('book', book)
              return (
                <CardSearch
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors[0]}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  description={book.volumeInfo.description}
                  handleSaveBook={this.handleSaveBook}
                  id={book.id}
                  key={book.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
