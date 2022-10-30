import React from "react";

function Links() {
  return (
    <div className="buttons">
      <a
        href="https://twitter.com/ChimzCodes"
        target="_blank"
        id="twitter"
        className="button"
      >
        Twitter Link
      </a>

      <br></br>

      <a
        href="https://training.zuri.team/"
        target="_blank"
        id="btn_zuri"
        className="button"
      >
        Zuri Team
      </a>

      <br></br>

      <a
        href="http://books.zuri.team"
        target="_blank"
        id="books"
        className="button"
        title="This is where design and coding books can be found"
      >
        Zuri Books
      </a>

      <br></br>

      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=<chimwemwemasona>"
        target="_blank"
        id="book_python"
        className="button"
        title="A Python course book for beginners"
      >
        Python Books
      </a>

      <br></br>

      <a
        href="https://background.zuri.team"
        target="_blank"
        id="pitch"
        className="button"
        title="Certified background checker for programmers"
      >
        Background Check for Coders
      </a>

      <br></br>

      <a
        href="https://books.zuri.team/design-rules"
        target="_blank"
        id="book_design"
        className="button"
        title="Do you want to get free design books?"
      >
        Design Books
      </a>
    </div>
  );
}

export default Links;
