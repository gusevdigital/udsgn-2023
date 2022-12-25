import { Html, Head, Main, NextScript } from 'next/document';
import loaderStyle from '../src/layout/loader.style';
import Loader from '../src/layout/Loader';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <head>
                <style>{loaderStyle}</style>
            </head>
            <body>
                <Loader />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
