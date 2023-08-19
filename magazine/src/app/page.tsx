import styles from "./page.module.css";
import ArticleBlockLarge from "../components/article_block_large";
import ArticleBlockHalf from "../components/article_block_half";
import ArticleBlock from "../components/article_block";
import Topbar from "../components/top_bar";

import { allPosts, Post } from "contentlayer/generated";

const featuredSlugs = [
  "/hidden_state_machines",
  "/python_caching_overview",
  "/annoying_python_patterns",
  "/clean_code_1_what_and_why",
  "/clean_code_2_syntax",
  "/loops_2x_faster_in_function",
  "/python_functools_lru_cache",
];

export default function Home() {
  return (
    <div className="IssuePage">
      <div className="u-Container content">
        <ul className="u-Grid column">
          <Topbar />
          {featuredSlugs.map((slug, index) => {
            const post = allPosts.find((p) => p.slug === slug);
            if (!post) return null; // Skip if no post found for the slug

            // Determine the type of article block
            if (index === 0) {
              // Always the first one
              return renderLargeArticle(post);
            } else if (index % 5 === 1 || index % 5 === 2) {
              // Every 1st and 2nd post after the large one (1-based indexing)
              return renderHalfArticle(post);
            } else {
              // Remaining ones
              return renderSmallArticle(post);
            }
          })}
        </ul>
      </div>
    </div>
  );
}

function renderLargeArticle(post: Post) {
  return (
    <ArticleBlockLarge
      key={post.slug}
      href={`/blog/${post.slug}`}
      image_src={post.image}
      image_alt={`Picture of ${post.title}`}
      title={post.title}
      paragraph={post.intro}
      topics={post.topics}
      document_type={post.document_type}
    />
  );
}

function renderHalfArticle(post: Post) {
  return (
    <ArticleBlockHalf
      key={post.slug}
      href={`/blog/${post.slug}`}
      image_src={post.image}
      image_alt={`Picture of ${post.title}`}
      title={post.title}
      paragraph={post.intro}
      topics={post.topics}
      document_type={post.document_type}
    />
  );
}

function renderSmallArticle(post: Post) {
  return (
    <ArticleBlock
      key={post.slug}
      href={`/blog/${post.slug}`}
      title={post.title}
      paragraph={post.intro}
      topics={post.topics}
      document_type={post.document_type}
    />
  );
}
