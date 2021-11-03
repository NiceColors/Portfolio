/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Portfolio",
  titleTemplate: "%s | Portfolio",
  defaultTitle: "Portfolio",
  description: "Next.js + chakra-ui + TypeScript Portfolio",
  canonical: "https://nextarter-chakra.sznm.dev",
  openGraph: {
    url: "https://github.com/NiceColors",
    title: "nextarter-chakra",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
      },
    ],
    site_name: "Portfolio",
  },
  twitter: {
    handle: "@nicecollors",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
