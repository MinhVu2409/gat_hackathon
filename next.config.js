module.exports = {
  reactStrictMode: false,
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
