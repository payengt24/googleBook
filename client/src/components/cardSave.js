import React from "react";

const Card = ({ title, author, image, description, deleteBook, id, handleView, link }) => {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          marginLeft: 100,
          width: "80%",
          backgroundColor: "white",
          position: "relative",
          padding: 10,
          marginBottom: 10,
          border: 'solid', borderWidth: 1
        }}
      >
        <div className="col-md-auto">
          <img
            src={`${image}`}
            alt="book"
            width="200px"
            height="200px"
            style={{ padding: 20 }}
          />
        </div>
        <div className="col">
          <button
            style={{ position: "absolute", top: "5px", right: "80px" }}
            className="btn btn-danger"
            onClick={() => deleteBook(id)}
          >
            Delete
          </button>
          <a href={link} target="_blank">
          <button
            style={{ position: "absolute", top: "5px", right: "0px" }}
            class="btn btn-info"
          >
            View
          </button>
          </a>
          <p style={{ fontSize: 18, fontWeight: "bold", paddingTop: 20 }}>
            {title}
          </p>
          <p>{description}</p>
          <p>Author: {author}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
