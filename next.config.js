/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    REACT_APP_CMS_URL: process.env.REACT_APP_CMS_URL,
    REACT_APP_EVENT_NAME: process.env.REACT_APP_EVENT_NAME,
  },
};

module.exports = nextConfig;
