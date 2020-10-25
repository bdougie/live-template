import NextHead from 'next/head';
import '../styles/index.css';
import Nav from 'components/Nav';

const Head = () => (
  <NextHead>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#ffffff" />
    <title>bdougie.live</title>
    <meta name="description" content="bdougie.live" />
  </NextHead>
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <div className="">
        <div className="w-full -mt-10 transform h-128 bg-gradient-brand -skew-y-2">
          <div className="w-full pt-10 transform skew-y-2">
            <Nav />
            <Component {...pageProps} />
            <footer>
              <div className="flex flex-col justify-between max-w-xl p-4 mx-auto md:flex-row sm:px-6 lg:max-w-screen-xl lg:px-8">
                <span className="text-xl font-bold">bdougie.live</span>
                <span className="text-sm text-gray-400">
                  © 2020 All Rights Reserved. bdougie.live
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
