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
            href="/reframing-tech-debt_2x.png"
            image_src="/reframing-tech-debt_2x.png"
            image_alt="Picture of the author"
            title="Reframing tech debt"
            paragraph="If we bake addressing tech debt into our plans, could it
            become an opportunity to build abundance into
            our&nbsp;systems?"
          />
          <ArticleBlockHalf
            href="/reframing-tech-debt_2x.png"
            image_src="/reframing-tech-debt_2x.png"
            image_alt="Picture of the author"
            title="Reframing tech debt"
            paragraph="On reimagining planning as a dynamic and generative process."
          />
          <ArticleBlockHalf
            href="/reframing-tech-debt_2x.png"
            image_src="/reframing-tech-debt_2x.png"
            image_alt="Picture of the author"
            title="Reframing tech debt"
            paragraph="On reimagining planning as a dynamic and generative process."
          />
          <ArticleBlock
            href="/reframing-tech-debt_2x.png"
            title="Reframing tech debt"
            paragraph="On reimagining planning as a dynamic and generative process."
          />
          <ArticleBlock
            href="/reframing-tech-debt_2x.png"
            title="Reframing tech debt"
            paragraph="On reimagining planning as a dynamic and generative process."
          />
          <ArticleBlock
            href="/reframing-tech-debt_2x.png"
            title="Reframing tech debt"
            paragraph="On reimagining planning as a dynamic and generative process."
          />
        </ul>
      </div>
    </div>
  );
}
