import App from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

//external css
import 'react-simple-flex-grid/lib/main.css';
import 'react-slideshow-image/dist/styles.css';

//main css
import '../public/scss/main.scss';
import NProgress from 'nprogress';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      NProgress.start();
    });
    router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });
    router.events.on('routeChangeError', () => NProgress.done());
  });
  return <Component {...pageProps} />;
};

export default MyApp;
