import { NextPage, GetStaticProps } from "next";
import "zenn-content-css";
import markdownToHtml from "zenn-markdown-html";

type StaticProps = {
  about: string;
};

const Resume: NextPage<StaticProps> = ({ about }) => {
  return (
    <article
      className="znc mx-auto my-8 w-10/12"
      dangerouslySetInnerHTML={{ __html: about }}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.resumeUrl}`);
  const markdownText = await response.text();
  const about = await markdownToHtml(markdownText);
  return {
    props: {
      about: about,
    },
  };
};

export default Resume;
