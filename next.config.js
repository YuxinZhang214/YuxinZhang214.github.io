/** @type {import('next').NextConfig} */
const nextConfig = {
    // For GitHub Pages' routing
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
