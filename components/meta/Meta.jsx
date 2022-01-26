import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  TITLE,
  DESCRIPTION,
  KEYWORDS,
  LOCATION,
  FACEBOOK_URL,
  WEB_URL,
  FACEBOOK,
  TWITTER,
  OG_IMAGE,
} from '../../public/variables/constants';

const Meta = (props) => {
  const { pathname } = useRouter();
  const { title, description } = props;
  const url = `${WEB_URL}${pathname}`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <meta name="keywords" content={KEYWORDS} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="description" content={description} />
      <meta name="geo.region" content="MM-06" />
      <meta name="geo.placename" content={LOCATION.address} />
      <meta name="geo.position" content={`${LOCATION.ltd};${LOCATION.lng}`} />
      <meta name="ICBM" content={`${LOCATION.ltd},${LOCATION.lng}`} />
      <meta property="article:publisher" content={FACEBOOK_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={TITLE} />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default Meta;
