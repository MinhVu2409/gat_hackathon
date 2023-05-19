module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/my-book",
        permanent: true,
      },
    ];
  },
};
