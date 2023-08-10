import React from "react";
import Image from "next/image";
import Link from "next/link";
import StringsWithHashtags from "./hashtag_strings";

type ArticleBlockHalfProps = {
  href: string;
  image_src: string;
  image_alt: string;
  title: string;
  paragraph: string;
  topics?: string[];
  document_type?: string;
};

const ArticleBlockHalf: React.FC<ArticleBlockHalfProps> = ({
  href,
  image_src,
  image_alt,
  title,
  paragraph,
  topics,
  document_type,
}) => (
  <li className="ArticleBlock half">
    <div className="FormatBlock">
      <div className="u-Art art">
        <Image src={image_src} width={500} height={500} alt={image_alt} />
      </div>
      <div className="text">
        <Link href={href}>
          <div className="head">
            <h3
              className=" t-TitleSans title underline"
              style={{ display: "inline" }}
            >
              {title}
            </h3>
          </div>
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

export default ArticleBlockHalf;
