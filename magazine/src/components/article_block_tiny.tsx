import React from "react";
import Link from "next/link";
import StringsWithHashtags from "./hashtag_strings";
import ArticleLevel from "./article_level";

type ArticleBlockProps = {
  href: string;
  title: string;
  paragraph: string;
  topics: string[];
  document_type: string;
  document_level?: string;
};

function truncate(str: string, n: number): string {
  return str.length > n ? str.substring(0, n) + "..." : str;
}

const ArticleBlockTiny: React.FC<ArticleBlockProps> = ({
  href,
  title,
  paragraph,
  topics,
  document_type,
  document_level,
}) => (
  <div
    className="ArticleBlock tiny"
    style={{
      flex: 1,
      paddingRight: "25px",
      marginBottom: "30px",
      display: "inline-block",
      position: "relative",
      minWidth: "250px",
      maxWidth: "350px",
    }}
  >
    <div className="text" style={{ marginTop: "0" }}>
      <Link href={href}>
        <h3
          className=" t-TitleSans title underline"
          style={{ display: "inline" }}
        >
          {title}
        </h3>
      </Link>
      <div
        className="t-BodySerif small intro"
        style={{
          paddingTop: "16px",
          paddingBottom: document_level ? "60px" : "10px",
        }}
      >
        {truncate(paragraph, 120)}
      </div>
      <div style={{ position: "absolute", bottom: 0 }}>
        {document_level ? <ArticleLevel level={document_level} /> : <></>}
        <StringsWithHashtags strings={topics} />
      </div>
    </div>
  </div>
);

export default ArticleBlockTiny;
