import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  /* config options here */
  reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin(
  './i18n/request.js',
);
export default withNextIntl(nextConfig);
