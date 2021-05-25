module.exports = {
  images: {
    domains: ["http://wallet-connectbot.org"],
  },
  async redirects() {
    return [
     
      {
        source: "/apps",
        destination: "https://registry.walletconnect.org/apps",
        permanent: true,
      },
    ];
  },
};
