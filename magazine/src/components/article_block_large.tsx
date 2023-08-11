import React from "react";
import Image from "next/image";
import Link from "next/link";
import StringsWithHashtags from "./hashtag_strings";

type ArticleBlockLargeProps = {
  href?: string;
  image_src: string;
  image_alt: string;
  title: string;
  paragraph: string;
  topics?: string[];
  document_type?: string;
};

const ArticleBlockLarge: React.FC<ArticleBlockLargeProps> = ({
  href,
  image_src,
  image_alt,
  title,
  paragraph,
  topics,
  document_type,
}) => {
  const content = (
    <>
      <div className="u-Art art">
        <Image
          src={image_src}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            paddingBottom: "3px",
            verticalAlign: "bottom",
            display: "inline-block",
          }} // optional
          alt={image_alt}
        />
      </div>
      <div
        className="text"
        style={{
          verticalAlign: "bottom",
          display: "inline-block",
          paddingTop: 0,
          marginTop: 0,
        }}
      >
        <h3
          className="t-TitleSerif large title underline"
          style={{ display: "inline" }}
          // style={{ maxWidth: "400px" }} // NOT SURE WHY WE WANT THIS?
        >
          {href ? <Link href={href}>{title}</Link> : <>{title}</>}
        </h3>
        <div className="t-BodySans large intro" style={{ paddingTop: "25px" }}>
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
    </>
  );

  return (
    <li className="ArticleBlock large">
      <div className="article-grid">{content}</div>
    </li>
  );
};

export default ArticleBlockLarge;
