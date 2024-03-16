import Head from "next/head";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link
          rel="shortcut icon"
          href="/images/logo@2x.jpg"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/images/logo2.jpg" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/css/versions.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/custom.css" />
        <Script src="/js/all.js" defer></Script>
        <Script src="/js/custom.js" defer></Script>
        <Script src="/js/timeline.min.js" defer></Script>
        {/* <Script id="script" defer>
          {`
            timeline(document.querySelectorAll('.timeline'), {
                forceVerticalMode: 700,
                mode: 'horizontal',
                verticalStartPosition: 'left',
                visibleItems: 4
            });
        `}
        </Script> */}
      </head>

      <Head>
        <title>Rahmani Education Trust </title>
      </Head>

      <body>{children}</body>
    </html>
  );
}
