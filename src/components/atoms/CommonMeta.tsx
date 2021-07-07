import Head from "next/head";

type MetaProps = {
  title: string;
  description: string;
  image?: string;
};

const CommonMeta: React.VFC<MetaProps> = ({
  title,
  description = `mktbsh's github pages app.`,
}) => {
  return (
    <Head>
      <title>{title} | mktbsh.github.io</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export { CommonMeta };
