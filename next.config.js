// @ts-check
/**
 * Next.js configuration with Progressive Web App (PWA) support.
 *
 * We use the `next-pwa` plugin to generate a service worker and Web App
 * Manifest automatically during the build process. The configuration
 * disables PWA features in development mode so that hot reloading works
 * properly but enables full offline support in production builds.
 */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // Disable PWA integration when developing locally.  This prevents the
  // service worker from interfering with the development server.
  disable: process.env.NODE_ENV === 'development',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // You can customize additional Next.js options here (e.g. images, i18n).
};

module.exports = withPWA(nextConfig);