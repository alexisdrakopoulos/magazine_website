import styles from "./page.module.css";
import ArticleBlockLarge from "../components/article_block_large";
import ArticleBlockHalf from "../components/article_block_half";
import ArticleBlock from "../components/article_block";

export default function Home() {
  return (
    <div className="IssuePage">
      <div className="u-Container content">
        <ul className="u-Grid column">
          <ArticleBlockLarge
            href="/blog/test"
            image_src="/finite_state_machine.jpg"
            image_alt="Picture of the author"
            title="Machine Learning Models as Finite State Machines"
            paragraph="Are ML Models in modern OOP toolkits finite state machines? My goal is not to convince you that this has some deeper implication, but rather to discuss the resulting design implications and review the current approaches in many OSS libraries."
          />
          <ArticleBlockHalf
            href="/blog/python_caching_overview"
            image_src="/snake_in_jungle.jpg"
            image_alt="Picture of the author"
            title="Python Caching Overview"
            paragraph="Caching from functools to Redis, and everything in between."
          />
          <ArticleBlockHalf
            href="/blog/test"
            image_src="/complex_snakes.png"
            image_alt="Picture of the author"
            title="Annoying Python Patterns"
            paragraph="We look beyond spaghetti code and nasty one liners, and discuss commonly found patterns which range from unaesthetic to outright dangerous."
          />
          <ArticleBlock
            href="/blog/test"
            title="Reframing tech debt"
            paragraph="On reimagining planning as a dynamic and generative process."
          />
          <ArticleBlock
            href="/blog/test"
            title="Reframing tech debt"
            paragraph="On reimagining planning as a dynamic and generative process."
          />
          <ArticleBlock
            href="/blog/test"
            title="Reframing tech debt"
            paragraph="On reimagining planning as a dynamic and generative process."
          />
        </ul>
      </div>
    </div>
  );
}
