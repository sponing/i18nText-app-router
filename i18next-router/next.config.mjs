/** @type {import('next').NextConfig} */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  i18n,
  reactStrictMode: true,
  async redirects() {
    return [
    ];
  },
};

export default nextConfig;
