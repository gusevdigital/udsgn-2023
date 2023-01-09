import { Html, Head, Main, NextScript } from 'next/document';
import loaderStyle from '../src/layout/loader.style';
import InitLoader from '../src/layout/InitLoader';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <head>
                <style>{loaderStyle}</style>
            </head>
            <body>
                <InitLoader />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
