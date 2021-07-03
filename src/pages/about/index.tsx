import Link from "next/link";

const About = () => {
  return (
    <section>
      <h1>Aboutページ</h1>
      <ul>
        <li>
          <Link href="/about/resume">
            <a>職務経歴書</a>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default About;
