/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
          {
            source: '/',
            destination: '/zh-CN',
            permanent: false, // 使用临时重定向 (302)
          },
        ];
      },
};

export default nextConfig;
