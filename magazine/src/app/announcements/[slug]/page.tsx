import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import NoticeBox from "@/components/notice_box";
import { NoticeProps } from "@/components/notice_box";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import Image from "next/image";

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  // a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  // Add a custom component.
  NoticeBox: (props: NoticeProps) => <NoticeBox {...props} />,
};

// export const generateStaticParams = () =>
//   allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const announcementPosts = allPosts.filter((post) =>
    post._raw.flattenedPath.includes("announcements")
  );

  const post = announcementPosts.find(
    (post) => post._raw.flattenedPath === `announcements/${params.slug}`
  );
  if (!post)
    throw new Error(`Post not found for slug: announcements/${params.slug}`);
  return {
    title: post.title,
    description: post.intro,
    date: post.date,
    topics: post.topics,
  };
};

const ImageComponent = ({ src, alt }: { src: string; alt: string }) => (
  <div className="u-Container art">
    <div className="u-Art">
      <Image src={src} width={500} height={500} alt={alt}></Image>
    </div>
  </div>
);

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const announcementPosts = allPosts.filter((post) =>
    post._raw.flattenedPath.includes("announcements")
  );

  const post = announcementPosts.find(
    (post) => post._raw.flattenedPath === `announcements/${params.slug}`
  );
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="ArticlePage">
      <header className="u-Container ArticleHeader">
        {post.image && <ImageComponent src={post.image} alt="test" />}
        <div className="column">
          <div className="u-Grid">
            <div className="main">
              <h1 className="t-TitleSerif large title">{post.title}</h1>
              <div className="t-BodySans large intro">{post.intro}</div>
            </div>
            <a className="issue" href="/test2">
              <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
            </a>
          </div>
        </div>
      </header>
      <div className="u-Container ArticleContent">
        <div className="ContentBody column">
          <MDXContent components={mdxComponents} />{" "}
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
