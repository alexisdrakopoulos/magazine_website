import React from "react";
import Image from "next/image";
import Link from "next/link";

type ArticleBlockProps = {
  href: string;
  title: string;
  paragraph: string;
};

const ArticleBlock: React.FC<ArticleBlockProps> = ({
  href,
  title,
  paragraph,
}) => (
  <li className="ArticleBlock">
    <Link href={href}>
      <div className="text">
        <div className="head">
          <h3 className=" t-TitleSans title">{title}</h3>
        </div>
        <div className="t-BodySerif small intro">{paragraph}</div>
      </div>
    </Link>
  </li>
);

export default ArticleBlock;
