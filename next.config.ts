import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};

module.exports = {
  i18n: {
    locales: ['en-US', 'id-ID', 'nl-NL'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'nouzhee.my.id/en',
        defaultLocale: 'en-US',
      },
      {
        domain: 'nouzhee.my.id/nl',
        defaultLocale: 'nl-NL',
      },
      {
        domain: 'nouzhee.my.id/id',
        defaultLocale: 'id-ID',
        http: true,
      },
    ],
  },
}

export default nextConfig;
