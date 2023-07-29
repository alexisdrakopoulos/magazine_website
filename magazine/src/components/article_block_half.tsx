import React from "react";
import Image from "next/image";
import Link from "next/link";

type ArticleBlockHalfProps = {
  href: string;
  image_src: string;
  image_alt: string;
  title: string;
  paragraph: string;
};

const ArticleBlockHalf: React.FC<ArticleBlockHalfProps> = ({
  href,
  image_src,
  image_alt,
  title,
  paragraph,
}) => (
  <li className="ArticleBlock half">
    <Link href={href}>
      <div className="u-Art art">
        <Image src={image_src} width={500} height={500} alt={image_alt} />
      </div>
      <div className="text">
        <div className="head">
          <h3 className=" t-TitleSans title">{title}</h3>
        </div>
        <div className="t-BodySerif small intro">{paragraph}</div>
      </div>
    </Link>
  </li>
);

export default ArticleBlockHalf;
