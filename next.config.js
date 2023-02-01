/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'u-dsgn.com',
            'admin.u-dsgn.com',
            'udsgnapi.local',
            'udsgn.gusevdigital.com',
        ],
    },
};

module.exports = nextConfig;
