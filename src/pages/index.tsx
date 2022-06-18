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
        <div className="container px-5 py-12 mx-auto">
          <div className="text-center mb-20">
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              インプットを試すための環境です。
            </p>
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
