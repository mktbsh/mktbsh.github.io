import { NextPage, GetStaticProps } from "next";
import Link from "next/link";

import { CommonMeta } from "components/atoms/CommonMeta";
import { getFeaturesJson } from "lib/statics";
import type { Features, Feature as FeatureProps } from "types/static/Features";

type StaticProps = {
  features: Features;
};

const Feature: React.VFC<FeatureProps> = ({ title, list }) => {
  return (
    <div className="p-4 lg:w-1/4 sm:w-1/2 w-full flex flex-col items-center">
      <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
        {title}
      </h2>
      <div className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
        {list &&
          list.map(({ name, checked }, i) => {
            return (
              <span key={`${title}_${name}_${i}`}>
                {checked ? (
                  <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                ) : (
                  <span className="w-4 h-4 mr-2 inline-flex" />
                )}
                {name}
              </span>
            );
          })}
      </div>
    </div>
  );
};

const Home: NextPage<StaticProps> = ({ features }) => {
  return (
    <>
      <CommonMeta
        title="Home"
        description="このGithub Pagesアプリは様々な技術を試す遊び場として運用されています。"
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              このアプリはNext.js × Github Pagesで運用中
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              試したことをアウトプットするためのサイトです。
            </p>
          </div>
          <div className="text-center mb-20">
            <h2 className="sm:text-2xl text-xl font-medium text-center title-font text-gray-900 mb-4">
              ポケモン図鑑ページを追加（2021/07/11）
            </h2>
            <Link href="/pokemon">
              <a className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-blue-700 underline">
                ポケモン図鑑ページはこちら
              </a>
            </Link>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {features?.contents.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      features: getFeaturesJson(),
    },
  };
};

export default Home;
