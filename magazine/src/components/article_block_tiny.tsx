import React from "react";
import Link from "next/link";
import StringsWithHashtags from "./hashtag_strings";

type ArticleBlockProps = {
  href: string;
  title: string;
  paragraph: string;
  topics: string[];
  document_type: string;
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
}) => (
  <div
    className="tiny"
    style={{
      paddingRight: "25px",
      marginBottom: "30px",
      display: "inline-block",
      position: "relative",
      //   alignSelf: "flex-end",
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
        style={{ paddingTop: "16px", paddingBottom: "16px" }}
      >
        {truncate(paragraph, 120)}
      </div>
      <div style={{ bottom: "0", position: "absolute" }}>
        <StringsWithHashtags strings={topics} />
      </div>
    </div>
  </div>
);

export default ArticleBlockTiny;
