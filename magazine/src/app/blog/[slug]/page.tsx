import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title, intro: post.intro };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <div className="ArticlePage">
      <header className="u-Container ArticleHeader">
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
          <Mdx code={post.body.code} />
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
