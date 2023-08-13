import React from "react";
import Link from "next/link";

const ArticleLevel: React.FC<{ level: string }> = ({ level }) => {
  return (
    <Link href="/">
      <div
        className="IssueTitle tiny u-Arrow right"
        style={{
          minWidth: "120px",
          maxWidth: "120px",
          alignItems: "center",
        }}
      >
        <h3
          className="t-TitleSans title"
          style={{
            margin: "0px",
            padding: "10px",
            color: "#000000",
            fontSize: "12px",
          }}
        >
          {level}
        </h3>
      </div>
    </Link>
  );
};

export default ArticleLevel;
