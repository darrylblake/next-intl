import {Formats, NextIntlProvider} from 'next-intl';
import {AppProps} from 'next/app';

export default function App({Component, pageProps}: AppProps) {
  // To achieve consistent date, time and number formatting
  // across the app, you can define a set of global formats.
  const formats: Partial<Formats> = {
    dateTime: {
      short: {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }
    }
  };

  return (
    <NextIntlProvider
      formats={formats}
      messages={pageProps.messages}
      now={new Date(pageProps.now)}
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
