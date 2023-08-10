import React from "react";
import Link from "next/link";
import StringsWithHashtags from "./hashtag_strings";

type ArticleBlockProps = {
  href: string;
  title: string;
  paragraph: string;
  topics?: string[];
  document_type?: string;
};

const ArticleBlock: React.FC<ArticleBlockProps> = ({
  href,
  title,
  paragraph,
  topics,
  document_type,
}) => (
  <li className="ArticleBlock">
    <div className="FormatBlock">
      <div className="text" style={{ marginTop: 0 }}>
        <Link href={href}>
          <h3
            className=" t-TitleSans title underline"
            style={{ display: "inline" }}
          >
            {title}
          </h3>
        </Link>
        <div className="t-BodySerif small intro" style={{ paddingTop: "10px" }}>
          {paragraph}
        </div>
        {topics ? (
          <div style={{ paddingTop: "20px" }}>
            <StringsWithHashtags strings={topics} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  </li>
);

export default ArticleBlock;
