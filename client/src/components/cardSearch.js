import React from "react";

const Card = ({ title, author, image, description, handleSaveBook, id, link }) => {
  return (
    <div class="container" >
      <div
        class="row"
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
        <div class="col-md-auto">
          <img
            src={`${image}`}
            alt="book"
            width="200px"
            height="200px"
            style={{ padding: 20 }}
          />
        </div>
        <div class="col">
          <button
            style={{ position: "absolute", top: "5px", right: "80px" }}
            class="btn btn-warning"
            onClick={() => handleSaveBook(id)}
          >
            Save
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
