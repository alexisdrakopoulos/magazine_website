import Image from "next/image";

function AboutLayout() {
  return (
    <div className="ArticlePage">
      <header className="u-Container content">
        <ul className="u-Grid column">
          <li className="ArticleBlock large">
            <Image
              src="/me.jpeg"
              alt="alexis drakopoulos profile"
              width={300}
              height={300}
              style={{ borderRadius: "50%" }}
            ></Image>

            <div className="text" style={{ paddingLeft: "100px" }}>
              <div className="head">
                <h3 className="t-TitleSans title">About Me</h3>
              </div>
              <div className="t-BodySerif intro">
                Hi! I'm an ML Engineer passionate about writing clean
                maintainable code. My interests range from low latency/high
                performance systems to higher level theory such as system
                design. I also like various areas of applied mathematics such as
                statistical learning & probabilistic programming. I enjoy
                working in fast-paced high impact teams working on interesting
                technical problems.
              </div>
            </div>
          </li>
          <li className="ArticleBlock large">
            <div className="text" style={{ paddingRight: "100px" }}>
              <div className="head">
                <h3 className="t-TitleSans title">About MinorVersion</h3>
              </div>
              <div className="t-BodySerif intro">
                MinorVersion is a small magazine/blog I started to share my own
                perspectives, experiences and ideas relating to software
                engineering, computer science and applied mathematics.
              </div>
            </div>
            <Image
              src="/abstract_math.png"
              alt="abstract math dali style"
              width={300}
              height={300}
              style={{ borderRadius: "50%" }}
            ></Image>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default AboutLayout;
