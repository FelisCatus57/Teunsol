import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { JSX } from 'react/jsx-runtime';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
    render(): JSX.Element {
        return (
            <>
                <Head>
                    <meta name = "description" content = "Global Project Managemen"/>
                    <meta property = "og:title" content = "Teunsol International"/>
                    <meta property = "og:description" content = "Global Project Managemen"/>
                </Head>
            </>
        )
    }
}