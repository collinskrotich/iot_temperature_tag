/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
  
};

module.exports =   {
  env: {
    AWS_ACCCESS_KEY_ID:AKIAZSAW76WPCTWZNBY7,
    AWS_SECRET_ACCESS_KEY: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,
    AWS_REGION:us-east-1,
    AWS_TABLE_NAME:airqualitydb,
    AWS_SDK_LOAD_CONFIG:1
},
nextConfig
}

