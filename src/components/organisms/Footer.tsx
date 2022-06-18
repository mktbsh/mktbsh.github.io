const CopyRight = () => {
  return (
    <p className="text-gray-500 text-sm text-center sm:text-left">
      © mktbsh.github.io —
      <a
        href="https://twitter.com/mktbsh"
        rel="noopener noreferrer"
        className="text-gray-600 ml-1"
        target="_blank"
      >
        @mktbsh
      </a>
    </p>
  );
};

const TwitterLink = () => {
  return (
    <a className="ml-3 text-gray-500">
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
      </svg>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <CopyRight />
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <TwitterLink />
        </span>
      </div>
    </footer>
  );
};

export { Footer };
