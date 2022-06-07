export const DEV_ONLY_PAGE = () => {
  if (process.env.NODE_ENV !== "production") {
    return { props: {} };
  }

  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  };
};
