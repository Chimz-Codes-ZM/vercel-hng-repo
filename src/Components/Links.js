import React from "react";

function Links() {
  return (
    <div className="buttons">
      <a href="https://twitter.com/ChimzCodes" target="_blank">
        <button id="twitter" className="button">Twitter Link</button>
      </a>

      <br></br>

      <a href="https://training.zuri.team/" target="_blank">
        <button id="btn_zuri" className="button">Zuri Team</button>
      </a>

      <br></br>

      <a href="http://books.zuri.team" target="_blank">
        <button id="books" className="button">Zuri Books</button>
      </a>

      <br></br>

      <a href="https://books.zuri.team/python-for-beginners?ref_id=<chimwemwemasona>" target="_blank">
        <button id="book_python" className="button">Python Books</button>
      </a>

      <br></br>

      <a href="https://background.zuri.team" target="_blank">
        <button id="pitch" className="button">Background Check for Coders</button>
      </a>

      <br></br>

      <a href="https://books.zuri.team/design-rules" target="_blank">
        <button id="book_design" className="button">Design Books</button>
      </a>
    </div>
  );
}

export default Links;
