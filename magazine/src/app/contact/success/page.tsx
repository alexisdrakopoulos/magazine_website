import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="ArticlePage">
      <header className="u-Container content">
        <ul className="u-Grid column">
          <li className="ArticleBlock large">
            <div className="article-grid">
              <div className="text" style={{ paddingTop: "50px" }}>
                <div className="head">
                  <h3 className="t-TitleSerif large title">
                    Thanks for contacting us!
                  </h3>
                  <div className="t-BodySans large intro">
                    We will try to get to your e-mail soon.
                  </div>
                </div>
              </div>
              <div className="u-Art art">
                <Image
                  src="/message_success.png"
                  width={600}
                  height={600}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    paddingBottom: "3px",
                    paddingTop: "50px",
                  }} // optional
                  alt="successful contact"
                  unoptimized
                />
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
}
