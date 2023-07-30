import React from "react";
// import { Form } from "./components/form";

export default function Contact() {
  return (
    <div className="ArticlePage">
      <header className="u-Container content">
        <ul className="u-Grid column">
          <li className="ArticleBlock">
            <div className="text">
              <div className="head">
                <h3 className="t-TitleSans title">Contact Us</h3>
              </div>
              <div className="t-BodySerif intro">
                Feel free to reach out with questions, suggestions, or just to
                say hello!
              </div>
            </div>
          </li>
          <li className="ArticleBlock">
            <div className="text">
              <div className="">{/* <Form /> */}</div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
}
