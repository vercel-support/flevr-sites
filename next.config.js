const DOMAIN = process.env.VERCEL_ENV ? "flevr.com" : "local.host";

module.exports = {
  webpack: {},
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/",
          has: [
            {
              type: "host",
              value: `(?<subdomain>[a-zA-Z-]+).${DOMAIN}`,
            },
          ],
          destination: "/:subdomain",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: `(?<subdomain>[a-zA-Z-]+).${DOMAIN}`,
            },
          ],
          destination: "/:subdomain/:path*",
        },
      ],
    };
  },
};
