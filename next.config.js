/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //跨域配置
  async rewrites(){
    return [
      //接口请求前缀带上/api-text/
      {source:'/api-text/:path*',destination:'http://127.0.0.1:8080/:path*'}
    ]
  }
}

module.exports = nextConfig
