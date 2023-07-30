import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="PageNav">
      <div className="u-Container">
        <div className="column">
          <h1 className="logo gap">
            <a href="/">
              <Image
                src="/temporary_logo.svg"
                alt="minorversion"
                width={300}
                height={60}
              ></Image>
            </a>
          </h1>
          <ul className="nav">
            <li>
              <Link href="/topics/">
                <span>Topics</span>
              </Link>
            </li>
            <li>
              <Link href="/about/">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="/contact/">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
