// import fs from "fs";

// import { NextPage, GetStaticProps } from "next";
// import "zenn-content-css";
// import markdownToHtml from "zenn-markdown-html";

// type StaticProps = {
//   about: string;
// };

// const About: NextPage<StaticProps> = ({ about }) => {
//   return (
//     <article
//       className="znc mx-auto my-8 w-10/12"
//       dangerouslySetInnerHTML={{ __html: about }}
//     />
//   );
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const content = fs.readFileSync(process.cwd() + "/docs/about.md", "utf8");
//   const about = await markdownToHtml(content);
//   return {
//     props: {
//       about: about,
//     },
//   };
// };

const About = () => {
  return <h1>About</h1>;
};

export default About;
